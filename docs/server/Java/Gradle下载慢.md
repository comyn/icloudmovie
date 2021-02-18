
# Android Studio 在默认build.gradle 中加入 maven 阿里云源

https://blog.csdn.net/xfhy_/article/details/88430385

## 添加成默认的

找到Android Studio 安装目录,我如下:

    D:\install\android-studio\plugins\android\lib\templates\gradle-projects\NewAndroidModule\root\build.gradle.ftl
用notpad++打开build.gradle.ftl文件并进行编辑,将如下内容拷贝到源文件中.
其实就只是添加了maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }

    // Top-level build file where you can add configuration options common to all sub-projects/modules.
    <#macro loadProperties>
    <#if useOfflineRepo!false>
        Properties properties = new Properties()
        properties.load(project.rootProject.file("local.properties").newDataInputStream())
    </#if>
    </#macro>
    <#macro useProperties>
    <#if useOfflineRepo!false>
            properties.getProperty("offline.repo").split(",").each { repo ->
                maven { url repo }
            }
    </#if>
    </#macro>

    buildscript {<#if includeKotlinSupport!false>
        ext.kotlin_version = '${kotlinVersion}'</#if>
        <@loadProperties/>
        repositories {
            <@useProperties/>
            maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }
            google()
            jcenter()
            <#if includeKotlinEapRepo!false>maven { url '${kotlinEapRepoUrl}' }</#if>
        }
        dependencies {
            classpath 'com.android.tools.build:gradle:${gradlePluginVersion}'
            <#if includeKotlinSupport!false>classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"</#if>
            // NOTE: Do not place your application dependencies here; they belong
            // in the individual module build.gradle files
        }
    }

    allprojects {
        <@loadProperties/>
        repositories {
            <@useProperties/>
            maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }
            google()
            jcenter()
            <#if includeKotlinEapRepo!false>maven { url '${kotlinEapRepoUrl}' }</#if>
        }
    }

    task clean(type: Delete) {
        delete rootProject.buildDir
    }

## 不添加成默认

不添加成默认的话,每次去添加到项目的如下地方即可

    // Top-level build file where you can add configuration options common to all sub-projects/modules.

    buildscript {
        repositories {
            maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }
            google()
            jcenter()
        }
        dependencies {
            classpath 'com.android.tools.build:gradle:3.6.1'

            // NOTE: Do not place your application dependencies here; they belong
            // in the individual module build.gradle files
        }
    }

    allprojects {
        repositories {
            maven{ url 'http://maven.aliyun.com/nexus/content/groups/public/'}
            google()
            jcenter()
        }
    }

    task clean(type: Delete) {
        delete rootProject.buildDir
    }
