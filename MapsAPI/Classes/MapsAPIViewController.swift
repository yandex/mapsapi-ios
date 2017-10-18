//
//  MapsAPIViewController.swift
//  MapsAPI
//
//  Created by Alexander Zinchuk on 26.05.16.
//  Copyright © 2016 Yandex. All rights reserved.
//

import Cordova

// Workaround for http://stackoverflow.com/questions/25538995/cant-load-uiviewcontroller-xib-file-in-storyboard-in-swift?lq=1
@objc(MapsAPIViewController)

open class MapsAPIViewController: CDVViewController {
    enum MapsAPIError: Error {
        case jsFileNotFound
    }

    open var apiEnterprise: Bool = false
    open var apiVersion: String = "2.1"
    open var apiParams = [
        "lang": "ru_RU",
        "mode": "release"
    ]
    open lazy var jsFileName: String = {
        let controllerName = String(describing: type(of: self)).replacingOccurrences(of: "ViewController", with: "")

        return String(controllerName.characters.prefix(1)).lowercased() + String(controllerName.characters.dropFirst())
    }()
    
    override open func viewDidLoad() {
        try! testJsFile()

        self.configFile = "Frameworks/MapsAPI.framework/config.xml"
        self.wwwFolderName = "Frameworks/MapsAPI.framework/www"
        self.startPage = "index.html?params=" + getParamsJson()
        
        super.viewDidLoad()
    }
    
    fileprivate func testJsFile() throws {
        guard let path = Bundle.main.path(forResource: self.jsFileName, ofType: "js") else {
            throw MapsAPIError.jsFileNotFound
        }
        
        if !FileManager.default.fileExists(atPath: path) {
            throw MapsAPIError.jsFileNotFound
        }
    }
    
    fileprivate func getParamsJson() -> String {
        let params = [
            "api_enterprise": self.apiEnterprise,
            "api_version": self.apiVersion,
            "api_params": self.apiParams,
            "init_file": "../../../" + self.jsFileName + ".js"
        ] as [String : Any]
        
        let json = try! JSONSerialization.data(withJSONObject: params, options: JSONSerialization.WritingOptions(rawValue: 0))
        let string = String(data: json, encoding: String.Encoding.ascii)!
        let escaped = string.addingPercentEncoding(withAllowedCharacters: .urlHostAllowed)!
        
        return escaped
    }
}
