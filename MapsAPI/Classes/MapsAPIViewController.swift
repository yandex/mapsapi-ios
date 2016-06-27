//
//  MapsAPIViewController.swift
//  MapsAPI
//
//  Created by Alexander Zinchuk on 26.05.16.
//  Copyright © 2016 Yandex. All rights reserved.
//

import Cordova

// Workaound for http://stackoverflow.com/questions/25538995/cant-load-uiviewcontroller-xib-file-in-storyboard-in-swift?lq=1
@objc(MapsAPIViewController)

public class MapsAPIViewController: CDVViewController {
    enum MapsAPIError: ErrorType {
        case JSFileNotFound
    }
    
    let apiLang: String = "ru_RU"
    let apiMode: String = "release"
    let apiEnterprise: Bool = false
    
    lazy var jsFileName: String = {
        let controllerName = String(self.dynamicType).stringByReplacingOccurrencesOfString("ViewController", withString: "")
        
        return String(controllerName.characters.prefix(1)).lowercaseString + String(controllerName.characters.dropFirst())
    }()
    
    override public func viewDidLoad() {
        try! testJsFile()

        self.configFile = "Frameworks/MapsAPI.framework/config.xml"
        self.wwwFolderName = "Frameworks/MapsAPI.framework/www"
        self.startPage = "index.html?params=" + getParamsJson()
        
        super.viewDidLoad()
    }
    
    private func testJsFile() throws {
        guard let path = NSBundle.mainBundle().pathForResource(self.jsFileName, ofType: "js") else {
            throw MapsAPIError.JSFileNotFound
        }
        
        if !NSFileManager.defaultManager().fileExistsAtPath(path) {
            throw MapsAPIError.JSFileNotFound
        }
    }
    
    private func getParamsJson() -> String {
        let params = [
            "api_lang": self.apiLang,
            "api_mode": self.apiMode,
            "api_enterprise": self.apiEnterprise,
            "init_file": "../../../" + self.jsFileName + ".js"
        ]
        
        let json = try! NSJSONSerialization.dataWithJSONObject(params, options: NSJSONWritingOptions(rawValue: 0))
        let string = String(data: json, encoding: NSASCIIStringEncoding)!
        let escaped = string.stringByAddingPercentEncodingWithAllowedCharacters(.URLHostAllowedCharacterSet())!
        
        return escaped
    }
}