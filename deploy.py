import boto3
import os
from botocore.client import Config
import zipfile
import StringIO
import mimetypes


def lambda_handler(event, context):
    
    sns = boto3.resource('sns')
    topic = sns.Topic(os.environ['SNS_TOPIC'])
    
    try:
        s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))
    
        build_bucket = s3.Bucket(os.environ['BUILD_BUCKET'])
        portfolio_bucket = s3.Bucket(os.environ['PORTFOLIO_BUCKET'])
    
        ## Can use the /tmp folder when running Lambda functions
        portfolio_zip = StringIO.StringIO()
        
        build_bucket.download_fileobj('jbcportfolio.zip', portfolio_zip)
       
    
        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                print(obj)
                portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
    
        topic.publish(Subject="Portfolio Deployed", Message="Deployment successful via Lambda.")
    except: 
        topic.publish(Subject="Portfolio Deploy Failed", Message="Deployment failed.")
        raise
    return 'Hello from Lambda'