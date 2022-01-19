import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReportService } from 'src/app/shared/services/report/report.service';
import { Reports, ReportTypeEnum } from 'src/app/shared/util/reports';
import { Utilities } from 'src/app/shared/util/utilities';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  constructor(
    public snackBar: MatSnackBar,
    private reportService: ReportService,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
  }

  generateReportInventory() {
    this.generateReport(ReportTypeEnum.ReportType_Inventory, Reports.getDataInventory(null, null, null));
  }

  generateReportRentingContract() {
    this.generateReport(ReportTypeEnum.ReportType_RentingContract, Reports.getDataRentingContract(null, null, null, null));
  }

  generateReportSubRentingContract() {
    this.generateReport(ReportTypeEnum.ReportType_SubRentingContract, Reports.getDataSubrentingContract(null, null, null));
  }

  generateRequestEndContractBeforeEndOfTerm() {
    this.generateReport(ReportTypeEnum.ReportType_End_RentingContract, Reports.getDataEndRentingContract(null, null));
  }

  private generateReport(reportType: ReportTypeEnum, dataType) {
    this.reportService.getPDFFile(reportType, dataType).subscribe(
      param => {
        let jsonResponse = JSON.parse(JSON.stringify(param));
        if (jsonResponse['message'] === 'OK')
          this.downloadFile(Utilities.dataURItoBlob(jsonResponse['content']));
      }
    );
  }

  private downloadFile(blob: Blob) {
    const dataURL = window.URL.createObjectURL(blob);

    // IE doesn't allow using a blob object directly as link href
    // instead it is necessary to use msSaveOrOpenBlob
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob);
      return;
    }

    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'export file.odt';
    link.click();

    setTimeout(() => {
      // For Firefox it is necessary to delay revoking the ObjectURL
      window.URL.revokeObjectURL(dataURL);
    }, 100);
  }
}
