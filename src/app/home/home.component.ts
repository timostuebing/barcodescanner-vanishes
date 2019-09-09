import { Component, OnInit } from "@angular/core";
import { BarcodeScanner } from 'nativescript-barcodescanner';
import { Page } from 'tns-core-modules/ui/page/page';


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public result = '';

    constructor(page: Page) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    public scanBarcode(): void {
        new BarcodeScanner().scan({
            formats: 'QR_CODE, EAN_13, EAN_8, DATA_MATRIX',
            orientation: 'portrait',
            resultDisplayDuration: 0,
            openSettingsIfPermissionWasPreviouslyDenied: true,
            torchOn: false,
            showTorchButton: false,
            beepOnScan: true
        }).then((result) => {
            this.result = result.text;
        });
    }
}
