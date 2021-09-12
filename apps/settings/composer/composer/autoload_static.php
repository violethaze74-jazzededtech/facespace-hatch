<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitSettings
{
    public static $prefixLengthsPsr4 = array (
        'O' => 
        array (
            'OCA\\Settings\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'OCA\\Settings\\' => 
        array (
            0 => __DIR__ . '/..' . '/../lib',
        ),
    );

    public static $classMap = array (
        'OCA\\Settings\\Activity\\GroupProvider' => __DIR__ . '/..' . '/../lib/Activity/GroupProvider.php',
        'OCA\\Settings\\Activity\\GroupSetting' => __DIR__ . '/..' . '/../lib/Activity/GroupSetting.php',
        'OCA\\Settings\\Activity\\Provider' => __DIR__ . '/..' . '/../lib/Activity/Provider.php',
        'OCA\\Settings\\Activity\\SecurityFilter' => __DIR__ . '/..' . '/../lib/Activity/SecurityFilter.php',
        'OCA\\Settings\\Activity\\SecurityProvider' => __DIR__ . '/..' . '/../lib/Activity/SecurityProvider.php',
        'OCA\\Settings\\Activity\\SecuritySetting' => __DIR__ . '/..' . '/../lib/Activity/SecuritySetting.php',
        'OCA\\Settings\\Activity\\Setting' => __DIR__ . '/..' . '/../lib/Activity/Setting.php',
        'OCA\\Settings\\Admin\\Mail' => __DIR__ . '/..' . '/../lib/Settings/Admin/Mail.php',
        'OCA\\Settings\\Admin\\Overview' => __DIR__ . '/..' . '/../lib/Settings/Admin/Overview.php',
        'OCA\\Settings\\Admin\\Security' => __DIR__ . '/..' . '/../lib/Settings/Admin/Security.php',
        'OCA\\Settings\\Admin\\Server' => __DIR__ . '/..' . '/../lib/Settings/Admin/Server.php',
        'OCA\\Settings\\Admin\\Sharing' => __DIR__ . '/..' . '/../lib/Settings/Admin/Sharing.php',
        'OCA\\Settings\\AppInfo\\Application' => __DIR__ . '/..' . '/../lib/AppInfo/Application.php',
        'OCA\\Settings\\BackgroundJobs\\VerifyUserData' => __DIR__ . '/..' . '/../lib/BackgroundJobs/VerifyUserData.php',
        'OCA\\Settings\\Controller\\AdminSettingsController' => __DIR__ . '/..' . '/../lib/Controller/AdminSettingsController.php',
        'OCA\\Settings\\Controller\\AppSettingsController' => __DIR__ . '/..' . '/../lib/Controller/AppSettingsController.php',
        'OCA\\Settings\\Controller\\AuthSettingsController' => __DIR__ . '/..' . '/../lib/Controller/AuthSettingsController.php',
        'OCA\\Settings\\Controller\\CertificateController' => __DIR__ . '/..' . '/../lib/Controller/CertificateController.php',
        'OCA\\Settings\\Controller\\ChangePasswordController' => __DIR__ . '/..' . '/../lib/Controller/ChangePasswordController.php',
        'OCA\\Settings\\Controller\\CheckSetupController' => __DIR__ . '/..' . '/../lib/Controller/CheckSetupController.php',
        'OCA\\Settings\\Controller\\CommonSettingsTrait' => __DIR__ . '/..' . '/../lib/Controller/CommonSettingsTrait.php',
        'OCA\\Settings\\Controller\\HelpController' => __DIR__ . '/..' . '/../lib/Controller/HelpController.php',
        'OCA\\Settings\\Controller\\LogSettingsController' => __DIR__ . '/..' . '/../lib/Controller/LogSettingsController.php',
        'OCA\\Settings\\Controller\\MailSettingsController' => __DIR__ . '/..' . '/../lib/Controller/MailSettingsController.php',
        'OCA\\Settings\\Controller\\PersonalSettingsController' => __DIR__ . '/..' . '/../lib/Controller/PersonalSettingsController.php',
        'OCA\\Settings\\Controller\\TwoFactorSettingsController' => __DIR__ . '/..' . '/../lib/Controller/TwoFactorSettingsController.php',
        'OCA\\Settings\\Controller\\UsersController' => __DIR__ . '/..' . '/../lib/Controller/UsersController.php',
        'OCA\\Settings\\Hooks' => __DIR__ . '/..' . '/../lib/Hooks.php',
        'OCA\\Settings\\Mailer\\NewUserMailHelper' => __DIR__ . '/..' . '/../lib/Mailer/NewUserMailHelper.php',
        'OCA\\Settings\\Middleware\\SubadminMiddleware' => __DIR__ . '/..' . '/../lib/Middleware/SubadminMiddleware.php',
        'OCA\\Settings\\Sections\\Admin\\Additional' => __DIR__ . '/..' . '/../lib/Sections/Admin/Additional.php',
        'OCA\\Settings\\Sections\\Admin\\Groupware' => __DIR__ . '/..' . '/../lib/Sections/Admin/Groupware.php',
        'OCA\\Settings\\Sections\\Admin\\Overview' => __DIR__ . '/..' . '/../lib/Sections/Admin/Overview.php',
        'OCA\\Settings\\Sections\\Admin\\Security' => __DIR__ . '/..' . '/../lib/Sections/Admin/Security.php',
        'OCA\\Settings\\Sections\\Admin\\Server' => __DIR__ . '/..' . '/../lib/Sections/Admin/Server.php',
        'OCA\\Settings\\Sections\\Admin\\Sharing' => __DIR__ . '/..' . '/../lib/Sections/Admin/Sharing.php',
        'OCA\\Settings\\Sections\\Personal\\PersonalInfo' => __DIR__ . '/..' . '/../lib/Sections/Personal/PersonalInfo.php',
        'OCA\\Settings\\Sections\\Personal\\Security' => __DIR__ . '/..' . '/../lib/Sections/Personal/Security.php',
        'OCA\\Settings\\Sections\\Personal\\SyncClients' => __DIR__ . '/..' . '/../lib/Sections/Personal/SyncClients.php',
        'OCA\\Settings\\Settings\\Personal\\Additional' => __DIR__ . '/..' . '/../lib/Settings/Personal/Additional.php',
        'OCA\\Settings\\Settings\\Personal\\PersonalInfo' => __DIR__ . '/..' . '/../lib/Settings/Personal/PersonalInfo.php',
        'OCA\\Settings\\Settings\\Personal\\Security\\Authtokens' => __DIR__ . '/..' . '/../lib/Settings/Personal/Security/Authtokens.php',
        'OCA\\Settings\\Settings\\Personal\\Security\\Password' => __DIR__ . '/..' . '/../lib/Settings/Personal/Security/Password.php',
        'OCA\\Settings\\Settings\\Personal\\Security\\TwoFactor' => __DIR__ . '/..' . '/../lib/Settings/Personal/Security/TwoFactor.php',
        'OCA\\Settings\\Settings\\Personal\\ServerDevNotice' => __DIR__ . '/..' . '/../lib/Settings/Personal/ServerDevNotice.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitSettings::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitSettings::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitSettings::$classMap;

        }, null, ClassLoader::class);
    }
}
