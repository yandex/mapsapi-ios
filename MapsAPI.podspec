Pod::Spec.new do |s|
  s.name             = 'MapsAPI'
  s.version          = '0.1.0'
  s.summary          = 'Framework to add Yandex Maps API via WebView'

  s.description      = <<-DESC
Framework to add Yandex Maps API in WebView.
                       DESC

  s.homepage         = 'https://github.com/Ajaxy/mapsapi-ios'
  # s.screenshots     = 'www.example.com/screenshots_1', 'www.example.com/screenshots_2'
  s.license          = { :type => 'MPL', :file => 'LICENSE' }
  s.author           = { 'Ajaxy' => 'alexander@zinchuk.com' }
  s.source           = { :git => 'https://github.com/Ajaxy/mapsapi-ios.git', :tag => s.version.to_s }
  # s.social_media_url = 'https://twitter.com/<TWITTER_USERNAME>'

  s.ios.deployment_target = '9.0'

  s.source_files = 'MapsAPI/Classes/**/*'
  s.resources    = 'MapsAPI/CordovaResources/*'

  # s.resource_bundles = {
  #   'MapsAPI' => ['MapsAPI/Assets/*.png']
  # }

  # s.public_header_files = 'Pod/Classes/**/*.h'
  # s.frameworks = 'UIKit', 'MapKit'
  
  s.dependency 'Cordova'
  s.dependency 'CordovaPlugin-console'
  s.dependency 'cordova-plugin-device'
  s.dependency 'cordova-plugin-device-orientation'
  s.dependency 'cordova-plugin-device-motion'
  s.dependency 'cordova-plugin-globalization'
  s.dependency 'cordova-plugin-geolocation'
  s.dependency 'cordova-plugin-network-information'
  s.dependency 'cordova-plugin-wkwebview-engine'
  s.dependency 'cordova-plugin-file'
end
