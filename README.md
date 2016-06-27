# MapsAPI

Allows to easily add Yandex Maps to your existing iOS project using [Yandex.Maps JavaScript API](https://tech.yandex.com/maps/jsapi/).

<img src="./docs/iphone5s.png" height="280" /> 
<img src="./docs/iphone5c.png" height="280" /> 
<img src="./docs/ipad.png" height="280" />

## Installation

MapsAPI is available through [CocoaPods](http://cocoapods.org). To install
it, simply add the following line to your Podfile:

```ruby
pod 'MapsAPI'
```

## Start instantly

1. Create class `MyMapViewController` inherited from `MapsAPIViewController` and add it to any place you want to put the map.

2. Copy [myMap.js](defaults/myMap.js) to your target resources and use [JavaScript API](https://tech.yandex.com/maps/jsapi/) to modify it and operate with the map.

## Example

To run the example project, clone the repo, and run `pod install` from the Example directory first.

## Usage

### Connector
Is used to send and receive data in Swift/ObjC <-> JavaScript code. Coming soon.

### Additional parameters
You can owerwrite params as follows:
```swift
class MyMapViewController: MapsAPIViewController {
    override func viewDidLoad() {
        // Default: 'ru_RU'.
        self.apiLang = 'en_US'
        
        // Default: 'release'.
        self.apiMode = 'debug'
        
        // Default: false. See https://tech.yandex.com/maps/doc/jsapi/2.1/commercial/index-docpage/
        self.apiEnterprise = true
        
        // By default is taken from view controller name. I.e. 'myMap' for MyMapViewController.
        self.initFileName = 'anotherFile'
    
        super.viewDidLoad()
    }
}
```

### Multiple maps
You can add other view controllers and `.js` files keeping convention of matching names for each pair.

### Offline
Tile cache coming soon.

## Author

Alexander Zinchuk, zinchuk@yandex-team.ru
