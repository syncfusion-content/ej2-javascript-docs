---
layout: post
title: Common installation errors in ##Platform_Name## Essential Studio | Syncfusion
description: Troubleshoot common installation errors when installing Syncfusion ##Platform_Name## Essential Studio.
platform: ej2-javascript
control: common
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Common Installation Errors

This article describes the most common installation errors, as well as the causes and solutions to those errors.

**Applies to:** Syncfusion Essential Studio installers (Online and Offline) for ##Platform_Name## on Windows.

* Unlocking the license installer using the trial key
* License has expired
* Unable to find a valid license or trial
* Unable to install because of another installation
* Unable to install due to controlled folder access

## Unlocking the license installer using the trial key

**Error Message:** Sorry, the provided unlock key is a trial unlock key and cannot be used to unlock the licensed version of our Essential Studio<sup style="font-size:70%">&reg;</sup> for JavaScript installer.

![Trial unlock key used on licensed installer error dialog](images/error1.png)

**Reason** <br /> You are attempting to use a Trial unlock key to unlock the licensed installer.

**Suggested solution** <br /> Only a licensed unlock key can unlock a licensed installer. To unlock the licensed installer, use the licensed unlock key. To generate the licensed unlock key, refer to [this](https://www.syncfusion.com/kb/2326/how-to-generate-syncfusion-setup-unlock-key-from-syncfusion-support-account) article.

## License has expired

**Error Message:** Your license for Syncfusion<sup style="font-size:70%">&reg;</sup> Essential Studio<sup style="font-size:70%">&reg;</sup> for JavaScript – EJ2 has been expired since &lt;date&gt;. Please renew your subscription and try again.

***Online Installer***

![Online installer license expired error dialog](images/error2.png)

**Reason** <br /> This error message will appear if your license has expired.

**Suggested solution** <br /> You can choose from the options below.

1. You can renew your subscription [here](https://www.syncfusion.com/account/my-renewals).

2. You can get a new license [here](https://www.syncfusion.com/sales/products).

3. You can reach out to our sales team by emailing sales@syncfusion.com.

4. You can extend the 30-day trial period before it expires.

## Unable to find a valid license or trial

**Error Message:** Sorry, we are unable to find a valid license or trial for Essential Studio<sup style="font-size:70%">&reg;</sup> for JavaScript – EJ2 under your account.

***Offline installer***

![Offline installer unable to find a valid license or trial dialog](images/error3.png)

***Online installer***

![Online installer unable to find a valid license or trial dialog](images/error4.png)

**Reason** <br /> The following are possible causes of this error:

* When your trial period expired
* When you don’t have a license or an active trial
* You are not the license holder of your license
* Your account administrator has not yet assigned you a license.

**Suggested solution** <br />

1. You can get a new license [here](https://www.syncfusion.com/sales/products).

2. Contact your account administrator.

3. Send an email to clientrelations@syncfusion.com to request a license.

4. You can reach out to our sales team by emailing sales@syncfusion.com.

## Unable to install because of another installation

**Error Message:** Another installation is in progress. You cannot start this installation without completing all other currently active installations. Click cancel to end this installer or retry to attempt after currently active installation completed to install again.

![Another installation in progress error dialog](images/error5.png)

**Reason** <br /> You are trying to install when another installation is already running on your machine.

**Suggested solution** <br /> To resolve the issue, end the active msiexec process using Task Manager, then run the Syncfusion<sup style="font-size:70%">&reg;</sup> installer again. If the problem persists, restart the computer and try again.

1. Open Windows Task Manager.

2. Go to the **Details** tab.

3. Select **msiexec.exe** (it may appear as **msiexec.exe *32** on 64-bit systems) and click **End task**.

![End msiexec.exe task in Windows Task Manager Details tab](images/error6.png)

## Unable to install due to controlled folder access

***Offline***

**Error Message:** Controlled folder access seems to be enabled in your machine. The provided install or samples location (e.g., Public Documents) is protected by the controlled folder access settings.

![Offline installer controlled folder access blocked dialog](images/error7.png)

***Online***

**Error Message:** Controlled folder access seems to be enabled in your machine. The provided install, samples, or download location (e.g., Public Documents) is protected by the controlled folder access settings. (The Online installer references the additional download location, while the Offline installer does not.)

![Online installer controlled folder access blocked dialog](images/error8.png)

**Reason** <br /> Controlled folder access is enabled on your machine.

***Suggested solution***

**Suggestion 1:** <br />
1. Our demos are installed in the Public Documents folder by default.
2. Controlled folder access is enabled on your machine, so the demos cannot be installed in the Documents folder. If you need to install the demos in the Documents folder, follow the steps in this [link](https://support.microsoft.com/en-us/windows/allow-an-app-to-access-controlled-folders-b5b6627a-b008-2ca2-7931-7e51e912b034) and disable controlled folder access. You can also allow the Syncfusion installer through Controlled Folder Access instead of disabling it entirely.
3. You can re-enable controlled folder access after installing the Syncfusion<sup style="font-size:70%">&reg;</sup> installer.

**Suggestion 2:** <br />
1. If you do not want to disable controlled folder access, you can install the demos in another directory. In the installer, click **Browse** on the install location screen and choose a folder that is not protected by controlled folder access.
