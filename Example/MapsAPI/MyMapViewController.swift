//
//  MyMapViewController.swift
//  MapsAPISample
//
//  Created by Alexandr Zinchuk on 26.05.16.
//  Copyright © 2016 Yandex. All rights reserved.
//

import UIKit
import MapsAPI

class MyMapViewController: MapsAPIViewController {
    
    override var prefersStatusBarHidden: Bool {
        return true
    }

    override func viewDidLoad() {
        self.apiParams["mode"] = "debug"

        super.viewDidLoad()
    }
}
