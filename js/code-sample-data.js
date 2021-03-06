export const reactsample = [

    {
         title: "React Class",
         code: `import React from 'react';
  
  
         class ExampleWorkModal extends React.Component {
         
             render ()  {
                 
                 let example = this.props.example;
                 let modalClass = this.props.open ? 'modal--open' : 'modal--closed'
         
                 return (
         
               <div className={"background--skyBlue " + modalClass}>
               <span className="color--cloud modal__closeButton" onClick={ (evt) => { this.props.closeModal(evt) } }>
                 <i className="fa fa-window-close-o"></i>
               </span>
               <img alt={ example.image.desc }
                    className="modal__image"
                    src={ example.image.src }/>
               <div className="color--cloud modal__text">
                 <h2 className="modal__title">
                   { example.title }
                 </h2>
                 <a className="color--skyBlue modal__link"
                    href={ example.href }>
                   Check it out
                 </a>
                 <br></br> <br></br>
                 <a className="color--skyBlue modal__link"
                    href={ example.github }>
                   Github Examples
                 </a>
                 <p  className="modal__description">
                    { example.desc }
                 </p>
               </div>
             </div>
                 )
             };
         
         };
         
         export default ExampleWorkModal;`
         
        },
   {
    title: "React Class 2",
    code: `  import React from 'react';
    import ReactDOM from 'react-dom';
    import ExampleWork from './example-work';
    import CodeSample from './code-sample';
     
    const MyWork = [
       {
            title: "Configuration Management",
            key: "cm",
            desc: "Configuration Management examples",
            href: "../cm.html",
            github: "https://github.com/jcook05/ansible",
            image: {
                desc: "Configuration Management examples", 
                src: "images/IMG_0111.JPG"
           } 
      },
      {
        title: "CICD",
        key: "cicd",
        desc: "CICD example code, Jenkins build and deploy",
        href: "../cicd.html",
        github: "../comingsoon.html",
        image: {
            desc: "Continuous Integration Continuous Deployment examples", 
            src: "images/IMG_0117.JPG" 
       } 
    },
    {
        title: "Front End",
        key: "frontend",
        desc: "Front end example code",
        href: "../codesample.html",
        github: "https://github.com/jcook05/serverlessportfolio",
        image: {
            desc: "Front End examples", 
            src: "images/marmot.JPG"        
       } 
    }
    ]
    if (document.getElementById('example-work'))
    {
    ReactDOM.render(<ExampleWork work={MyWork}/>, document.getElementById('example-work'));
    }
    else if (document.getElementById('test-work'))
    {
    ReactDOM.render(<CodeSample />, document.getElementById('test-work'));
    }`
    
   }
   
  ]
  
  export const cmsample = [
  
    {
         title: "Ansible System Task",
         code: `---
  
         # Create Jenkins group needed since not installing Jenkins 
         - name: Jenkins shell Group
           group: name=jenkins gid=4949 state=present
         
         # Create Jenkins User
         - name: Jenkins shell User
           user: name=jenkins comment="Jenkins Continuous Build server" home=/var/lib/jenkins shell=/bin/bash uid=2222 group=jenkins groups=jenkins state=present
            
         - name: Install Packages
           apt: name={{item}} state=latest
           ignore_errors: True
           with_items:
             - git
             - unzip
             - python-setuptools
             - python-dev
             - build-essential
             - python-pip
             - openssl
             - mini-httpd
             - nginx
             - memcached
             - lftp
             - asciidoc
             - ansible
             - docker.io
             - libunwind8
              
         - name: Install Additional Development tools. 
           apt: name={{item}} state=latest 
           ignore_errors: True
           with_items:
             - php
             - php-cli
             - php-mysql
             - php-pdo
             - php-gd
             - php-imap
             - php-mbstring
             - autoconf
             - automake
             - nodejs-legacy
             - npm
                
         - name: sudo yum remove java-1.7.0-openjdk
           apt: name={{item}} state=removed 
           with_items:
             - java-1.7.0-openjdk
         
         - name: ensure required packages are installed for Java 8
           apt: name={{item}} state=latest update_cache=yes
           with_items:
             - python-software-properties
         
         - name: Add Java repository to sources
           action: apt_repository repo='ppa:webupd8team/java'
         
         - name: Autoaccept license for Java
           action: shell echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | sudo /usr/bin/debconf-set-selections
         
         - name: Update APT package cache
           action: apt update_cache=yes
         
         - name: Install Java 8
           action: apt pkg=oracle-java8-installer state=latest install_recommends=yes
         
         - name: Set Java 8 Env
           action: apt pkg=oracle-java8-set-default state=latest install_recommends=yes
             
         - name:  Install boto3
           command: pip install boto3
         
         - name:  Install cli53
           command: pip install cli53
         
         - name: Start Docker
           service: name=docker state=started
         
         - name: Add Docker to jenkins group
           command: usermod -aG docker jenkins
         
         - name:  Update pip
           command:  pip install --upgrade pip
           
         - name: Create Jenkins Temp Dir
           file: dest=/tmp/jenkins state=directory mode=0755 owner=root group=root
         
         - name: Create Jenkins .kube Dir for Kubernetes config
           file: dest=/var/lib/jenkins/.kube state=directory mode=0755 owner=jenkins group=jenkins
         
         - name: Get Jenkins Key
           get_url: url=https://pkg.jenkins.io/debian-stable/jenkins.io.key dest=/tmp/jenkins.io.key owner=root group=root mode=0644
         
         - apt_key:
             file: /tmp/jenkins.io.key
             state: present
         `
        },
   {
    title: "Docker - Jira ",
    code: `  FROM openjdk:8
  
    # Configuration variables.
    ENV JIRA_HOME     /var/atlassian/jira
    ENV JIRA_INSTALL  /opt/atlassian/jira
    ENV JIRA_VERSION  7.4.1
    
    # Install Atlassian JIRA and helper tools and setup initial home
    # directory structure.
    RUN set -x \\
        && echo "deb http://ftp.debian.org/debian jessie-backports main" > /etc/apt/sources.list.d/jessie-backports.list \\
        && apt-get update --quiet \\
        && apt-get install --quiet --yes --no-install-recommends xmlstarlet \\
        && apt-get install --quiet --yes --no-install-recommends -t jessie-backports libtcnative-1 \\
        && apt-get clean \\
        && mkdir -p                "\${JIRA_HOME}" \\
        && mkdir -p                "\${JIRA_HOME}/caches/indexes" \\
        && chmod -R 700            "\${JIRA_HOME}" \\
        && chown -R daemon:daemon  "\${JIRA_HOME}" \\
        && mkdir -p                "\${JIRA_INSTALL}/conf/Catalina" \\
        && curl -Ls                "https://www.atlassian.com/software/jira/downloads/binary/atlassian-jira-core-\${JIRA_VERSION}.tar.gz" | \\
        tar -xz --directory "\${JIRA_INSTALL}" --strip-components=1 --no-same-owner \\
        && curl -Ls                "https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-java-5.1.38.tar.gz" | tar -xz --directory \\
        "\${JIRA_INSTALL}/lib" --strip-components=1 --no-same-owner "mysql-connector-java-5.1.38/mysql-connector-java-5.1.38-bin.jar" \\
        && rm -f                   "\${JIRA_INSTALL}/lib/postgresql-9.1-903.jdbc4-atlassian-hosted.jar" \\
        && curl -Ls                "https://jdbc.postgresql.org/download/postgresql-9.4.1212.jar" -o "\${JIRA_INSTALL}/lib/postgresql-9.4.1212.jar" \\
        && chmod -R 700            "\${JIRA_INSTALL}/conf" \\
        && chmod -R 700            "\${JIRA_INSTALL}/logs" \\
        && chmod -R 700            "\${JIRA_INSTALL}/temp" \\
        && chmod -R 700            "\${JIRA_INSTALL}/work" \\
        && chown -R daemon:daemon  "\${JIRA_INSTALL}/conf" \\
        && chown -R daemon:daemon  "\${JIRA_INSTALL}/logs" \\
        && chown -R daemon:daemon  "\${JIRA_INSTALL}/temp" \\
        && chown -R daemon:daemon  "\${JIRA_INSTALL}/work" \\
        && sed --in-place          "s/java version/openjdk version/g" "\${JIRA_INSTALL}/bin/check-java.sh" \\
        && echo -e                 "\njira.home=$JIRA_HOME" >> "\${JIRA_INSTALL}/atlassian-jira/WEB-INF/classes/jira-application.properties" \\
        && touch -d "@0"           "\${JIRA_INSTALL}/conf/server.xml"
    #COPY ./JiraHome/jira /opt/atlassian/jira
    
    # Use the default unprivileged account. This could be considered bad practice
    # on systems where multiple processes end up being executed by 'daemon' but
    # here we only ever run one process anyway.
    USER daemon:daemon
    
    # Expose default HTTP connector port.
    EXPOSE 8080
    
    # Set volume mount points for installation and home directory. Changes to the
    # home directory needs to be persisted as well as parts of the installation
    # directory due to eg. logs.
    VOLUME ["/var/atlassian/jira", "/opt/atlassian/jira/logs"]
    
    # Set the default working directory as the installation directory.
    WORKDIR /var/atlassian/jira
    
    #COPY "docker-entrypoint.sh" "/"
    #ENTRYPOINT ["/docker-entrypoint.sh"]
    
    # Run Atlassian JIRA as a foreground process by default.
    CMD ["/opt/atlassian/jira/bin/catalina.sh", "run"]
    
    ## To Run
    #docker run --detach --publish 8080:8080 -v ./JiraHome:/var/atlassian/jira jira:latest`
   }
   
  ]
  
  
  export const cicdsample = [
  
    {
         title: "DSL Jobs Plugin",
         code: `// Will generate a job based on DevTemplate for each item in the apps array
         def apps = [  "WeatherService": 
                     [ "repos": ["git@bitbucket.org:managedcicd/weathermsbuild.git", '$BRANCH'],
                      "name":"WeatherService",
                      "description":"prototype dotnet service",
                      "authtoken":"buildit",
                      "imagename":"weather",
                      "deploymentname":"weather",
                      "baseimagepath":"managedcicd/dotnetservice"
                    ],
                     "fromscratch":
                     // Illustrates the proper syntax for a GitLabs project.
                       [ "repos": ["ssh://git@code.managedcicd.com:7999/GitLabsStandard/gitlabsproject.git", '$BRANCH'],
                       "name":"fromscratch",
                       "description":"test service desc",
                       "authtoken":"buildit",
                       "imagename":"fromscratch",
                    ],
                     "StandardService":
                       [ "repos": ["git@bitbucket.org:managedcicd/standardservice.git", '$BRANCH'],
                       "name":"StandardService",
                       "description":"Standard Lightweight Microservice",
                       "authtoken":"buildit",
                       "imagename":"standardservice",
                       "deploymentname":"standardservice", 
                       "baseimagepath":"managedcicd/standardservice"
                    ]
                    ]
         apps.values().each { app ->
         
         // Loop through apps array
             def jobprefix
             def jobname
             //if ("\${JobTemplate}" == "DevTemplate")
             //{
                jobprefix = "Development" 
             //} else
             //{  
             //  jobprefix = "Release"
               
             //}
           
           /* Conditionally generate Job Name based on Selected Template */
             
           jobname = jobprefix + app.name
           job(jobname){
                using 'DevTemplate'
           
           }
          description(app.description)
          logRotator(10, -1, 1, -1)
           scm {
             git(app.repos.get(0),app.repos.get(1))
           }
        
             // Configure Slack  
             
            // configure {
            //         it / 'publishers' / 'jenkins.plugins.slack.SlackNotifier'(plugin: "slack@2.0.1") {
            //             teamDomain('myteam')
            //             authToken('mytoken')
            //             buildServerUrl('http://mydomain:8080/')
            //             room('#my-room')
            //             notifyUnstable(true)
            //             notifyFailure(true)
            //             notifyBackToNormal(true)
            //             includeTestSummary(true)
            //             commitInfoChoice('AUTHORS_AND_TITLES')
            //         }
            //     }
          configure { node ->  
             node / 'scm' / 'extensions' << 'hudson.plugins.git.extensions.impl.UserExclusion' {
               excludedUsers 'Jenkins User'
             }
           }
          authenticationToken(app.authtoken)
          configure { project ->  
             project / 'triggers' << 'hudson.triggers.SCMTrigger' {
               spec ('H/5 * * * *')
               ignorePostCommitHooks 'false' 
             }
           }
         
           parameters {
             stringParam("imagename",app.imagename,"Kubernetes image name")
             stringParam("deploymentname",app.deploymentname,"Kuberetes deploy name")
             stringParam("baseimagepath",app.baseimagepath,"Base path of image, for example managedcicd/dotnetservice for DockerHub repository or server/group/service for GitLabs")    
           }
           steps {
                 shell(readFileFromWorkspace('buildscripts/dotnetbuild'))
                 shell(readFileFromWorkspace('buildscripts/dockerbuildpush'))   
           }
           }
         }`
         
        },
   {
    title: "Serverless Lambda Deploy",
    code: `  import boto3
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
        return 'Hello from Lambda'`
    
   }
   
  ]
  
  export const awssample = [
  
    {
         title: "Python AWS EC2 Library",
         code: ` """Method to get all VPCs"""
         def get_vpcs(self, profile):
             session = boto3.Session(profile_name=profile)
             ec2 = boto3.resource("ec2", region_name="us-west-2")       
             my_vpcs = ec2.vpcs.all()
             return my_vpcs
     
         """Method to describe VPCs"""
         def describe_vpcs(self,profile):
             session = boto3.Session(profile_name=profile)
             ec2 = session.client('ec2')
             my_vpcs = ec2.describe_vpcs()
             return my_vpcs
    
         """ Method to create a VPC with the default tenancy"""
         def create_vpc(self, cidr, profile):
             session = boto3.Session(profile_name=profile)
             ec2 = session.client('ec2')
             vpc = ec2.create_vpc(
             CidrBlock=cidr,
             AmazonProvidedIpv6CidrBlock=False,
             DryRun=False,
             InstanceTenancy='default'
             )
     
         """Method to get images by filters"""
         def get_imagesbyfilter(self, filters, profile):
             session = boto3.Session(profile_name=profile)
             boto3conn = session.resource("ec2", region_name="us-west-2")         
             my_images = boto3conn.images.filter(Owners=['self'], Filters=filters)
             return my_images
         
         """Method to get images by filters"""
         def get_imagesbyprofile(self, filters, profile):
             
             session = boto3.Session(profile_name=profile)
             boto3conn = session.resource("ec2", region_name="us-west-2")  
             my_images = boto3conn.images.filter(Owners=['self'], Filters=filters)
             return my_images
     
         """Boto3 Method to get images by filters"""
         def get_instancesbyfilter(self, filters, profile):
     
             session = boto3.Session(profile_name=profile)
             boto3conn = session.resource("ec2", region_name="us-west-2")
               
             
             instances = boto3conn.instances.filter(Filters=filters)
             return instances
     
         
         def get_instancesbyprofile(self, filters, profile):
     
     
             session = boto3.Session(profile_name=profile)
     
             boto3conn = session.resource("ec2", region_name="us-west-2")
                         
             instances = boto3conn.instances.filter(Filters=filters)
             return instances
     `
         
        },
   {
    title: "Python AWS S3 Library",
    code: `  from fabric.api import run,env, put, get, local, settings
    from os import path
    import time
    from fabric.colors import green as _green, yellow as _yellow
    import boto
    import boto.ec2
    import boto.ec2.autoscale
    import boto3
    from pprint import pprint
    from botocore.exceptions import ClientError
    from mimetypes import MimeTypes
    
    
    class AwsS3Utilities:
        
        """Method to upload file to an S3 bucket"""
        def uploadfile(self, filepath, filename, bucket):
            ## Setup boto3 client with route53
            
            s3 = boto3.resource('s3')
            bucket = s3.Bucket(bucket)
            bucket.upload_file(filepath, filename)
    
        """Method to set existing object ACL to public-read"""
        def setACLread(self, bucket, key):
            s3 = boto3.resource('s3')
             
            s3.ObjectAcl(bucket, key).put(ACL='public-read')
    
        """Method to put an object with a public read ACL."""
        def put_pub_object(self, filepath, filename, bucket):
    
            s3 = boto3.resource('s3')
            print ("Uploading file " + filepath + ' to ' + filename)
            try:                 
                data = open(filepath, 'rb')
                ftype, encoding = MimeTypes().guess_type(filepath)
                conType = ftype if ftype is not None else encoding if encoding is not None else 'text/plain'    
                s3.Object(bucket, filename).put(Body=data,ContentType=conType,ACL='public-read')
            except ClientError as err:
                print("Failed to upload artefact to S3.\n" + str(err))
                return False
            except IOError as err:
                print("Failed to access artefact in this directory.\n" + str(err))
                return False   
            return True
    
        """Method to put an object with a private read ACL."""
        def put_private_object(self, filepath, filename, bucket):
    
            s3 = boto3.resource('s3')
            print ("Uploading file " + filepath + ' to ' + filename)
            try:                 
                data = open(filepath, 'rb')
                ftype, encoding = MimeTypes().guess_type(filepath)
                conType = ftype if ftype is not None else encoding if encoding is not None else 'text/plain'    
                s3.Object(bucket, filename).put(Body=data,ContentType=conType,ACL='private')
            except ClientError as err:
                print("Failed to upload artefact to S3.\n" + str(err))
                return False
            except IOError as err:
                print("Failed to access artefact in this directory.\n" + str(err))
                return False   
            return True
    
        """Method to put an object with a public read ACL."""
        def get_object(self, targetdir, filename, bucket):
    
            s3 = boto3.resource('s3')
            print ("Downloading file " + filename + ' to ' + targetdir)
            try:                 
               
                newfile = targetdir + filename
                s3.Bucket('mybucket').download_file(filename, newfile)    
                ##s3.Object(bucket, filename).get()
            except ClientError as err:
                print("Failed to download artifact from S3.\n" + str(err))
                return False
            
            return True`
    
   }
   
  ]
  
  export const slssample = [
  
    {
         title: "NodeJS Serverless",
         code: `'use strict'
         const querystring = require('querystring')
         function generator(min, max) {
           // return whole number Math.floor rounds
           return Math.floor(Math.random() * (max - min) + min);
         }
         function RandomWeather(lat, long, days) {
           // Conditions Array
           var conditions = ["Sunny","Mostly Sunny","Partly Sunny","Partly Cloudy","Mostly Cloudy","Rain"];
           // Forecast Array
           var forecast = new Array()
           console.log("Modal to review questions and edit or submit")
           console.log(lat)
           console.log(long)
           var obj = new Object();
           var test = generator(0, (conditions.length - 1))
           console.log(test)
         
           for (var i = 1; i < days; i++) {
         
             obj.HiTemperature = generator(40, 100);
             obj.LoTemperature = generator(0, obj.HiTemperature);
             obj.AverageWindSpeed = generator(0, 45);
             obj.Conditions = conditions[generator(0, (conditions.length - 1))];
           var jsonString = JSON.stringify(obj);    
         
           forecast.push(obj)
           }
           
           console.log(forecast.length)
           console.log(forecast[0].HiTemperature)
           console.log(forecast[0].LoTemperature)
           console.log(forecast[0].AverageWindSpeed)
           console.log(forecast[0].Conditions)
           console.log(jsonString)
           var newstring = JSON.stringify(forecast)
           console.log(newstring)
           return forecast;
         }
         var NewWeather = RandomWeather(35.5, 40.75, 6)
         module.exports.weather = (event, context, callback) => {
         
           var latitude = querystring.parse(event.body).lat
           var longitude = querystring.parse(event.body).long
           var WeatherReport = RandomWeather(latitude, longitude, 6)
           var jsonString = JSON.stringify(WeatherReport, null, 4);   
           const response = {
             statusCode: 200,
             body: jsonString,
           };
         
           callback(null, response);
         
           // Use this code if you don't use the http event with the LAMBDA-PROXY integration
           // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
         };
  `       
    }, 
    {
      title: "NodeJS Serverless yml",
      code:`service: nodejsweather # NOTE: update this with your service name
          
      provider:
        name: aws
        region: us-west-2
        runtime: nodejs6.10 
      functions:
        weather:
          handler: handler.weather
      
      #Setting up the APIGateWay end point
          events:
            - http:
                path: /
                method: get
  `    
  
    }
    
  
  ]
  export const edssample = [ 
  
    {
      title: "SG Event Driven Security",
      code:`import os
      import os.path
      import sys
      import json
      import boto3
      import botocore
      
      client = boto3.client('ec2')
      ssh = []
      tcp = []
      udp = []
      
      def getSg(group_id):
          response = client.describe_security_groups(
          Filters=[
              {
                  'Name': 'group-id',
                  'Values': [
                      group_id,
                  ]
              },
          ],
          DryRun=False,
          MaxResults=123
          )
          return response
      
      def revokeIngressCidr(sg_id, ip_permissions):
          response = client.revoke_security_group_ingress(
          GroupId=sg_id,
          IpPermissions=ip_permissions
          )
          return response    
      
      def revokeIngress(sg_id):
          if os.environ['ssh'] == "true":
              print("ssh is true " + "removing " +  str(len(ssh)) + " ingress rules")
              if len(ssh) > 0:
                  print(revokeIngressCidr(sg_id, ssh))
          if os.environ['tcp'] == "true":
              print("tcp is true " + "removing " +  str(len(tcp)) + " ingress rules")
              if len(tcp) > 0:
                  print(revokeIngressCidr(sg_id, tcp))
          if os.environ['udp'] == "true":
              print("udp is true " + "removing " +  str(len(tcp)) + " ingress rules")
              if len(udp) > 0:
                  print(revokeIngressCidr(sg_id, udp))
        
      
      def authorizeIngressCidr(sg_id, ip_permissions):
          print("getSome")
          
      def sg_security(event, context):
          #print(event)  
          sg_id = event["detail"]["requestParameters"]["groupId"]
          group_name = getSg(event["detail"]["requestParameters"]["groupId"])["SecurityGroups"][0]["GroupName"]
          print(group_name)
          ip_permissions = getSg(event["detail"]["requestParameters"]["groupId"])["SecurityGroups"][0]["IpPermissions"]
      
      
      ## May want to dynamically generate these.   Future iteration may remove all authorizations excluding specified cidrs
          removeCidr = [{'CidrIp': '0.0.0.0/0'}]
          removeCidrIpv6 = [{'CidrIpv6': '::/0'}]
          ## Setup IP Permissions
          for x in ip_permissions:
              print(x)
              for v in x["IpRanges"]:
                  #print(v)
                  if v["CidrIp"] == "0.0.0.0/0":
                      x["IpRanges"] = removeCidr
                      for v in x["Ipv6Ranges"]:
                          if["CidrIpv6"] == "::/0":
                              x["Ipv6Ranges"] = removeCidrIpv6
                      print("Open Port Found")
                     
                      if x["FromPort"] == 22 and x["ToPort"] == 22:
                          ssh.append(x)
                      elif x["FromPort"] != 22 and x["IpProtocol"] == "tcp":
                          tcp.append(x)
                      elif x["IpProtocol"] == "udp":
                          udp.append(x)
      
          for x in ssh:
              print(x)
          for x in tcp:
              print(x)
          for x in udp:
              print(x)
      
          revokeIngress(sg_id)`
    }
    ]