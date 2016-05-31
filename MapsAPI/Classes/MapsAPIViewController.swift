//
//  MapsAPIViewController.swift
//  MapsAPI
//
//  Created by Alexandr Zinchuk on 26.05.16.
//  Copyright © 2016 Yandex. All rights reserved.
//

import Cordova

public class MapsAPIViewController: CDVViewController {
    override public func viewDidLoad() {
        self.configFile = "Frameworks/MapsAPI.framework/config.xml"
        self.wwwFolderName = "Frameworks/MapsAPI.framework/www"
        
        super.viewDidLoad()
    }
}