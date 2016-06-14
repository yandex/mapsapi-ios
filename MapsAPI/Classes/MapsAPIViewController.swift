//
//  MapsAPIViewController.swift
//  MapsAPI
//
//  Created by Alexandr Zinchuk on 26.05.16.
//  Copyright © 2016 Yandex. All rights reserved.
//

import Cordova

// Workaound for http://stackoverflow.com/questions/25538995/cant-load-uiviewcontroller-xib-file-in-storyboard-in-swift?lq=1
@objc(MapsAPIViewController)

public class MapsAPIViewController: CDVViewController {
    override public func viewDidLoad() {
        self.configFile = "Frameworks/MapsAPI.framework/config.xml"
        self.wwwFolderName = "Frameworks/MapsAPI.framework/www"
        
        super.viewDidLoad()
    }
}