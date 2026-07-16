---
layout: post
title: Installation using web installer in ##Platform_Name## | Syncfusion
description: Learn how to install Syncfusion ##Platform_Name## Essential Studio using the web (online) installer.
platform: ej2-javascript
control: Installation using web installer
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Installation using Web Installer

You can refer to the [Download](https://ej2.syncfusion.com/documentation/installation-and-upgrade/download) section to learn how to get the JavaScript – EJ2 trial or licensed installer.

**Applies to:** Syncfusion Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript – EJ2 Web Installer on Windows.

## Prerequisites

Before you begin, make sure the following are in place:

* Windows 7 SP1 or later (Windows 10/11 recommended), 64-bit.
* Administrator rights on the machine (the installer must be run as administrator).
* An active internet connection (the Web Installer downloads the selected products at install time).
* A Syncfusion<sup style="font-size:70%">&reg;</sup> account with a valid trial or licensed subscription. To create one, see [Create a Syncfusion account](https://www.syncfusion.com/account/register).
* Any framework-specific prerequisites for the products you select (for example, Visual Studio for the Syncfusion Extensions option). The installer will alert you if additional software is required.

## Overview

For the Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript – EJ2 product, Syncfusion<sup style="font-size:70%">&reg;</sup> offers a Web Installer. This installer alleviates the burden of downloading a larger installer. You can simply download and run the online installer, which will be smaller in size and will download and install the Essential Studio<sup style="font-size:70%">&reg;</sup> products you have chosen. You can get the most recent version of Essential Studio<sup style="font-size:70%">&reg;</sup> Web Installer [here](https://www.syncfusion.com/account/downloads).

The frameworks listed below are supported in this installer.

* JavaScript
* Angular
* React
* Vue
* JavaScript (ES5)

## Installation

The steps below show how to install Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript – EJ2 Web Installer.

>Tip: Right-click the installer `.exe` and choose **Run as administrator** to avoid permission issues.

1. Open the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript – EJ2 Web Installer file from the downloaded location by double-clicking it. The Installer Wizard automatically opens and extracts the package.

    ![Installer package extraction dialog](images/1.png)

    >Note: The installer wizard extracts the `syncfusionejs2webinstaller_{version}.exe` dialog, which displays the package's unzip operation.

2. The Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript - EJ2 Web Installer's welcome wizard will be displayed. Click the **Next** button.

    ![Web installer welcome wizard](images/2.png)

3. The Platform Selection Wizard will appear. From the **Available** tab, select the products to be installed. Select the **Install All** checkbox to install all products.

    **Available**

    ![Platform selection wizard, Available tab](images/3.png)

    If you have multiple products installed in the same version, they will be listed under the **Installed** tab. You can also select which products to uninstall from the same version. Click the **Next** button.

    **Installed**

    ![Platform selection wizard, Installed tab](images/4.png)

    >Important: If the required software for the selected product isn't already installed, the **Additional Software Required** alert will appear. You can, however, continue the installation and install the necessary software later.

    **Required Software**

    ![Additional software required alert](images/5.png)

4. If previous version(s) for the selected products are installed, the **Uninstall previous version** wizard will be displayed. You can see the list of previously installed versions for the products you've chosen here. To remove all versions, check the **Uninstall All** checkbox. Click the **Next** button.

    ![Uninstall previous version wizard](images/6.png)

    >Note: From the 2021 Volume 1 release, Syncfusion<sup style="font-size:70%">&reg;</sup> provides an option to uninstall previous versions from 18.1 while installing the new version.

5. A pop-up screen will be displayed to confirm the uninstallation of the selected previous versions.

    ![Confirmation pop-up to uninstall previous versions](images/7.png)

6. The **Confirmation** wizard will appear with the list of products to be installed/uninstalled. You can view and modify the list of products that will be installed and uninstalled from this page.

    ![Confirmation wizard with list of products](images/8.png)

    >Note: By clicking the **Download Size** and **Installation Size** links, you can determine the approximate size of the download and installation.

7. The **Configuration** wizard will appear. You can change the **Download**, **Install**, and **Demos** locations from here. You can also change the additional settings on a product-by-product basis. Click **Next** to install with the default settings.

    ![Configuration wizard with download, install, and demos locations](images/9.png)

    **Additional settings**
    * Select the **Install Demos** check box to install Syncfusion<sup style="font-size:70%">&reg;</sup> samples, or leave the check box unchecked if you do not want to install Syncfusion<sup style="font-size:70%">&reg;</sup> samples.
    * Select the **Configure Syncfusion Extensions controls in Visual Studio** checkbox to configure the Syncfusion<sup style="font-size:70%">&reg;</sup> Extensions in Visual Studio, or clear this check box when you do not want to configure the Syncfusion<sup style="font-size:70%">&reg;</sup> Extensions in Visual Studio.
    * Check the **Create Desktop Shortcut** checkbox to add a desktop shortcut for the Syncfusion<sup style="font-size:70%">&reg;</sup> Control Panel.
    * Check the **Create Start Menu Shortcut** checkbox to add a shortcut to the Start menu for the Syncfusion<sup style="font-size:70%">&reg;</sup> Control Panel.

8. After reading the License Terms and Conditions, check the **I agree to the License Terms and Privacy Policy** check box. Click the **Next** button.

9. The **Login** wizard will appear. You must enter your Syncfusion<sup style="font-size:70%">&reg;</sup> email address and password. If you do not already have a Syncfusion<sup style="font-size:70%">&reg;</sup> account, you can create one by clicking **Create an Account**. If you have forgotten your password, click **Forgot Password** to create a new one. Click the **Install** button.

    ![Login wizard with email and password fields](images/8_.png)

    >Important: The products you have chosen will be installed based on your Syncfusion<sup style="font-size:70%">&reg;</sup> license (Trial or Licensed).

10. The download and installation/uninstallation progress will be displayed as shown below.

    ![Download and installation progress](images/9_.png)

11. When the installation is finished, the **Summary** wizard will appear. Here you can see the list of products that have been installed successfully and those that have failed. To close the Summary wizard, click **Finish**.

    ![Summary wizard showing installed products](images/12.png)

    * To open the Syncfusion<sup style="font-size:70%">&reg;</sup> Control Panel, click **Launch Control Panel**.

12. After installation, there will be two Syncfusion<sup style="font-size:70%">&reg;</sup> Control Panel entries, as shown below. The Essential Studio<sup style="font-size:70%">&reg;</sup> entry will manage all Syncfusion<sup style="font-size:70%">&reg;</sup> products installed in the same version, while the Product entry will only uninstall the specific product setup.

    ![Syncfusion Control Panel entries](images/13.png)

## Troubleshooting

If you encounter issues during installation, see [Common installation errors](https://ej2.syncfusion.com/documentation/installation-and-upgrade/common-installation-errors) for solutions to typical problems such as trial vs. license key mismatch, blocked installations, and controlled folder access.

## Uninstallation

The Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript – EJ2 installer can be uninstalled in two ways.

* Uninstall the JavaScript – EJ2 using the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript – EJ2 web installer.
* Uninstall the JavaScript – EJ2 from Windows Control Panel.

Follow either one of the options below to uninstall Syncfusion<sup style="font-size:70%">&reg;</sup> Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript – EJ2.

### Option 1: Uninstall the JavaScript – EJ2 using the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript – EJ2 web installer

Syncfusion<sup style="font-size:70%">&reg;</sup> provides the option to uninstall products of the same version directly from the Web Installer application. Select the products to be uninstalled from the list, and the Web Installer will uninstall them one by one.

Open the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript – EJ2 Online Installer file from the downloaded location by double-clicking it. The Installer Wizard automatically opens and extracts the package.

![Installer package extraction dialog for uninstallation](images/u1.png)

The Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript – EJ2 Web Installer's welcome wizard will be displayed. Click the **Next** button.

![Web installer welcome wizard for uninstallation](images/u2.png)

### Option 2: Uninstall the JavaScript–EJ2 from Windows Control Panel

You can uninstall all the installed products by selecting the **Syncfusion<sup style="font-size:70%">&reg;</sup> Essential Studio<sup style="font-size:70%">&reg;</sup> {version}** entry (element 1 in the below screenshot) from the Windows control panel, or you can uninstall JavaScript – EJ2 alone by selecting the **Syncfusion<sup style="font-size:70%">&reg;</sup> Essential Studio<sup style="font-size:70%">&reg;</sup> for JavaScript – EJ2 {version}** entry (element 2 in the below screenshot) from the Windows control panel.

![Windows Control Panel showing Syncfusion entries](images/u3.png)

>Note: If the **Syncfusion<sup style="font-size:70%">&reg;</sup> Essential Studio<sup style="font-size:70%">&reg;</sup> for JavaScript – EJ2 {version}** entry is selected from the Windows Control Panel, the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript – EJ2 will be removed, and the default MSI uninstallation window shown below will be displayed.

1. The Platform Selection Wizard will appear. From the **Installed** tab, select the products to be uninstalled. To select all products, check the **Uninstall All** checkbox. Click the **Next** button.

    **Installed**
    ![Platform selection wizard, Installed tab for uninstallation](images/u4.png)

    You can also select the products to be installed from the **Available** tab. Click the **Next** button.

    **Available**
    ![Platform selection wizard, Available tab for uninstallation](images/u5.png)

2. If other products are also selected for installation, the **Uninstall previous version** wizard will be displayed with previous version(s) installed for the selected products. Here you can view the list of installed previous versions for the selected products. Select the **Uninstall All** checkbox to select all the versions. Click **Next**.

    ![Uninstall previous version wizard during uninstallation](images/u6.png)

3. A pop-up screen will be displayed to confirm the uninstallation of the selected previous versions.

    ![Confirmation pop-up to uninstall previous versions](images/u7.png)

4. The **Confirmation** wizard will appear with the list of products to be installed/uninstalled. Here you can view and modify the list of products that will be installed/uninstalled.

    ![Confirmation wizard with list of products for uninstallation](images/u8.png)

    >Note: By clicking the **Download Size** and **Installation Size** links, you can determine the approximate size of the download and installation.

5. The **Configuration** wizard will appear. You can change the **Download**, **Install**, and **Demos** locations from here. You can also change the additional settings on a product-by-product basis. Click **Next** to install with the default settings.

    ![Configuration wizard during uninstallation](images/u9.png)

6. After reading the License Terms and Conditions, check the **I agree to the License Terms and Privacy Policy** check box. Click the **Next** button.

7. The **Login** wizard will appear. You must enter your Syncfusion<sup style="font-size:70%">&reg;</sup> email address and password. If you do not already have a Syncfusion<sup style="font-size:70%">&reg;</sup> account, you can create one by clicking **Create an Account**. If you have forgotten your password, click **Forgot Password** to create a new one. Click the **Install** button.

    ![Login wizard during uninstallation](images/u10.png)

    >Important: The products you have chosen will be installed/uninstalled based on your Syncfusion<sup style="font-size:70%">&reg;</sup> license (Trial or Licensed).

8. The download, installation, and uninstallation progress will be shown.

    ![Download, installation, and uninstallation progress](images/u11.png)

9. When the process is finished, the **Summary** wizard will appear. Here you can see the list of products that have been successfully and unsuccessfully installed/uninstalled. To close the Summary wizard, click **Finish**.

    ![Summary wizard for uninstallation](images/u12.png)

    * To open the Syncfusion<sup style="font-size:70%">&reg;</sup> Control Panel, click **Launch Control Panel**.