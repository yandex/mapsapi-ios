Pod::Spec.new do |s|
  s.name             = 'MapsAPI'
  s.version          = '0.1.0'
  s.summary          = 'Allows to easily add Yandex.Maps to your existing iOS project using Yandex.Maps JavaScript API'
  s.description      = 'Allows to easily add Yandex.Maps to your existing iOS project using Yandex.Maps JavaScript API'
  s.homepage         = 'https://github.com/yandex/mapsapi-ios'
  # s.screenshots     = 'https://github.com/raw/yandex/mapsapi-ios/master/docs/iphone5s.png', 'https://github.com/raw/yandex/mapsapi-ios/master/docs/iphone5c.png', 'https://github.com/raw/yandex/mapsapi-ios/master/docs/ipad.png'
  s.license          = { :type => 'MPL', :file => 'LICENSE' }
  s.author           = { 'Alexander Zinchuk' => 'zinchuk@yandex-team.ru' }
  s.source           = { :git => 'https://github.com/yandex/mapsapi-ios.git', :tag => s.version.to_s }

  s.ios.deployment_target = '9.0'
  s.source_files = 'MapsAPI/Classes/**/*'
  s.resources    = 'MapsAPI/CordovaResources/*'
  
  s.dependency 'Cordova', '~> 4.1.0'
  s.dependency 'CordovaPlugin-console'
  s.dependency 'cordova-plugin-device'
  s.dependency 'cordova-plugin-device-orientation'
  s.dependency 'cordova-plugin-device-motion'
  s.dependency 'cordova-plugin-globalization'
  s.dependency 'cordova-plugin-geolocation'
  s.dependency 'cordova-plugin-network-information'
  s.dependency 'cordova-plugin-wkwebview-engine'
  s.dependency 'cordova-plugin-file', '~> 4.2.0'
end
