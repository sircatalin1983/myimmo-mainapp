import { SafeResourceUrl } from '@angular/platform-browser';

export class Utilities {
  static generateBlobData(binaryContent, fileType): Blob {
    var mimeData = fileType ? AppIconEnum[fileType].mimeType : "";
    var blobData: Blob = binaryContent ? Utilities.dataURItoBlob2(mimeData + binaryContent) : null;
    return blobData;
  }

  static dataURItoBlob2(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);

    // create a view into the buffer
    var ia = new Uint8Array(ab);

    // set the bytes of the buffer to the correct values
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    // write the ArrayBuffer to a blob, and you're done
    var blob = new Blob([ab], { type: mimeString });
    return blob;
  }

  static dataURItoBlob(dataURI) {
    const byteString = atob(dataURI);

    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
    return blob;
  }

  static getMonthText(month): string {
    let monthInText = "";

    switch (month) {
      case 1:
        monthInText = "Ianuarie";
        break;
      case 2:
        monthInText = "Februarie";
        break;
      case 3:
        monthInText = "Martie";
        break;
      case 4:
        monthInText = "Aprilie";
        break;
      case 5:
        monthInText = "Mai";
        break;
      case 6:
        monthInText = "Iunie";
        break;
      case 7:
        monthInText = "Iulie";
        break;
      case 8:
        monthInText = "August";
        break;
      case 9:
        monthInText = "Septembrie";
        break;
      case 10:
        monthInText = "Octombrie";
        break;
      case 11:
        monthInText = "Noiembrie";
        break;
      case 12:
        monthInText = "Decembrie";
        break;
      default:
        monthInText = "";
    }

    return monthInText;
  }

  static getNumberOfMonthsBetweenTwoDates(startDate, endDate): number {
    var numberOfMonths = 0;

    var year1 = startDate.getFullYear();
    var year2 = endDate.getFullYear();
    var month1 = startDate.getMonth();
    var month2 = endDate.getMonth();
    if (month1 === 0) { //Have to take into account
      month1++;
      month2++;
    }

    numberOfMonths = (year2 - year1) * 12 + (month2 - month1) - 1;

    return numberOfMonths;
  }

  static indexOfObject(arr, key, value) {
    var j = -1;
    var result = arr.some(function (obj, i) {
      j++;
      return obj[key] == value;
    })

    if (!result) {
      return -1;
    } else {
      return j;
    };
  }
}

export enum BinaryTypeEnum {
  BinaryType_Image = "Image",
  BinaryType_Document = "Document",
  BinaryType_InvoiceToProcess = "InvoiceToProcess",
}

interface AppIconInstance {
  key: string;
  value: string;
  mimeType: string;
  binaryType: BinaryTypeEnum;
}

interface AppIcon {
  [key: string]: AppIconInstance;
}

export const AppIconEnum: AppIcon = {
  csv: { key: 'csv', value: 'csv.svg', mimeType: 'data:text/csv;base64,', binaryType: BinaryTypeEnum.BinaryType_Document },
  doc: { key: 'doc', value: 'doc.svg', mimeType: 'data:application/doc;base64,', binaryType: BinaryTypeEnum.BinaryType_Document },
  exe: { key: 'exe', value: 'exe.svg', mimeType: 'data:application/exe;base64,', binaryType: BinaryTypeEnum.BinaryType_Document },
  jpg: { key: 'jpg', value: 'jpg.svg', mimeType: "data:image/jpeg;base64,", binaryType: BinaryTypeEnum.BinaryType_Image },
  js: { key: 'js', value: 'js.svg', mimeType: 'data:application/js;base64,', binaryType: BinaryTypeEnum.BinaryType_Document },
  pdf: { key: 'pdf', value: 'pdf.svg', mimeType: "data:application/pdf;base64,", binaryType: BinaryTypeEnum.BinaryType_Document },
  png: { key: 'png', value: 'png.svg', mimeType: "data:image/png;base64,", binaryType: BinaryTypeEnum.BinaryType_Image },
  ppt: { key: 'ppt', value: 'ppt.svg', mimeType: 'data:application/ppt;base64,', binaryType: BinaryTypeEnum.BinaryType_Document },
  psd: { key: 'psd', value: 'psd.svg', mimeType: 'data:application/psd;base64,', binaryType: BinaryTypeEnum.BinaryType_Document },
  rtf: { key: 'rtf', value: 'rtf.svg', mimeType: 'data:application/rtf;base64,', binaryType: BinaryTypeEnum.BinaryType_Document },
  svg: { key: 'svg', value: 'svg.svg', mimeType: 'data:image/svg;base64,', binaryType: BinaryTypeEnum.BinaryType_Image },
  txt: { key: 'txt', value: 'txt.svg', mimeType: 'data:text/txt;base64,', binaryType: BinaryTypeEnum.BinaryType_Document },
  xls: { key: 'xls', value: 'xls.svg', mimeType: 'data:application/xls;base64,', binaryType: BinaryTypeEnum.BinaryType_Document },
  xml: { key: 'xml', value: 'xml.svg', mimeType: 'data:text/xml;base64,', binaryType: BinaryTypeEnum.BinaryType_Document },
  zip: { key: 'zip', value: 'zip.svg', mimeType: 'data:application/zip;base64,', binaryType: BinaryTypeEnum.BinaryType_Document },
  unkown: { key: 'unkown', mimeType: '', value: 'unkown.svg', binaryType: BinaryTypeEnum.BinaryType_Document },
};

export interface InvoiceTypeInstance {
  key: string;
  value: string;
  name: string;
  color: string;
}

export interface InvoiceType {
  [key: string]: InvoiceTypeInstance;
}

export const InvoiceTypeEnum: InvoiceType = {
  InvoiceType_NotPaid: { key: 'notpaid', value: '0', name: "Factura neplatita (furnizor)", color: "#ADD8E6" },
  InvoiceType_Outstanding: { key: 'outstanding', value: '1', name: "Factura restanta", color: "#FFB6C1" },
  InvoiceType_Paid: { key: 'paid', value: '2', name: "Factura platita (furnizor)", color: "white" },
}

export interface ContractTypeInstance {
  key: string;
  value: string;
  name: string;
  color: string;
}

export interface ContractType {
  [key: string]: ContractTypeInstance;
}

export const ContractTypeEnum: ContractType = {
  ContractType_Closed: { key: 'closed', value: '0', name: "Contract Finalizat", color: "#ADD8E6" },
  ContractType_Inactiv: { key: 'inactiv', value: '1', name: "Contract Inactiv", color: "#FFB6C1" },
  ContractType_Activ: { key: 'activ', value: '99', name: "Contract Activ", color: "#FFFFFF" },
}

export interface ContractInvoicePaymentTypeInstance {
  value: string;
  name: string;
}

export interface ContractInvoicePaymentType {
  [key: string]: ContractInvoicePaymentTypeInstance;
}

export const ContractInvoicePaymentTypeEnum: ContractInvoicePaymentType = {
  ContractInvoicePaymentType_Owner: { value: '0', name: "In sarcina proprietarului (cu recuperare lunara)" },
  ContractInvoicePaymentType_Owner2: { value: '1', name: "In sarcina proprietarului (inclusa in chirie)" },
  ContractInvoicePaymentType_Renter: { value: '2', name: "In sarcina chiriasului" },
}

export interface InvoicePaymentTypeInstance {
  value: string;
  name: string;
  colorAdmin: string;
  colorUser: string;
}

export interface InvoicePaymentType {
  [key: string]: InvoicePaymentTypeInstance;
}

export const InvoicePaymentTypeEnum: InvoicePaymentType = {
  InvoicePaymentType_NotPaid: { value: '0', name: "Factura nu este platita furnizor", colorAdmin: "#ADD8E6", colorUser: "#ADD8E6" },
  InvoicePaymentType_Paid2: { value: '1', name: "Factura platita furnizor, recuperare chirias", colorAdmin: "#607D8B", colorUser: "#FFB6C1" },
  InvoicePaymentType_Paid3: { value: '2', name: "Factura platita chirias, neplatita furnizor", colorAdmin: "#2196F3", colorUser: "white" },
  InvoicePaymentType_Paid: { value: '3', name: "Factura platita furnizor", colorAdmin: "white", colorUser: "white" },
  InvoicePaymentType_Outstanding: { value: '4', name: "Factura restanta", colorAdmin: "#FFB6C1", colorUser: "#FFB6C1" },
}

export const ReminderIconEnum: AppIcon = {
  follow: { key: 'follow', value: 'follow.png', mimeType: "data:image/png;base64,", binaryType: BinaryTypeEnum.BinaryType_Image },
  tick: { key: 'tick', value: 'tick.png', mimeType: "data:image/png;base64,", binaryType: BinaryTypeEnum.BinaryType_Image },
  warning: { key: 'warning', value: 'warning.png', mimeType: "data:image/png;base64,", binaryType: BinaryTypeEnum.BinaryType_Image },
};

export enum ApptypeEnum {
  Apptype_ActorType = "ActorType",
  Apptype_ExpenseType = "ExpenseType",
  Apptype_DocumentType = "DocumentType",
  Apptype_PropertyType = "PropertyType",
  Apptype_UtilityType = "UtilityType",
  Apptype_BinaryType = "BinaryType",
  Apptype_PaymentType = "PaymentType",
  Apptype_ReminderType = "ReminderType",
  Apptype_ContractInvoicePaymentType = "ContractInvoicePaymentType",
  Apptype_InvoicePaymentType = "InvoicePaymentType",
}

export enum ActorTypeEnum {
  Actor_Owner = "Owner",
  Actor_Renter = "Renter",
}

export enum DocumentTypeEnum {
  Document_Invoice = "Factura",
  Document_Property = "Proprietate",
  Document_Expense = "Expense",
  Document_Contract = "Contract",
  Document_Organisation = "Organisation"
}

export enum PropertyTypeEnum {
  Document_FlatStudio = "Ap Studio",
  Document_Flat1Room = "Garsoniera",
  Document_Flat2Rooms = "Ap 2 Camere",
  Document_Flat3Rooms = "Ap 3 Camere",
  Document_Flat4Rooms = "Ap 4 Camere",
}

export enum ReminderTypeEnum {
  ReminderTypeOrganisation_ANAFDepunereDeclaratieUnica = "ANAF Depunere Declaratie Unica",
  ReminderTypeOrganisation_ANAFPlata = "ANAF Plata",
  ReminderTypeOrganisation_ImpoziteLocale = "Impozite locale",
  ReminderTypeExpense_NewInvoice = "Factura noua",
  ReminderTypeExpense_OutstandingInvoice = "Factura neplatita",
  ReminderTypeExpense_OverdueInvoice = "Factura restanta",
  ReminderTypeContract_RentPayment = "Plata chirie",
  ReminderTypeContract_RenterInformation = "Informare chirias",
  ReminderTypeProperty_NewInvoice = "Factura noua",
  ReminderTypeProperty_OutstandingInvoice = "Factura neplatita",
  ReminderTypeProperty_OverdueInvoice = "Factura restanta",
}

export enum PaymentTypeEnum {
  PaymentType_Rent = "Chirie",
  PaymentType_Invoice = "Factura",
}

export enum ExpenseTypeEnum {
  ExpenseType_Invoice = "Factura",
}

export enum EndingTypeEnum {
  EndingType_At_Term = "0",
  EndingType_Anticipated_Friendly = "1",
  EndingType_Anticipated_ContractBreach = "2",
}


export class ExtendedURL {
  isDirectory: boolean;
  url: SafeResourceUrl;
  icon: string;

  constructor(
    isDirectory: boolean,
    url: SafeResourceUrl,
    icon: string) {
    this.isDirectory = isDirectory;
    this.url = url;
    this.icon = icon;
  }
}

export enum UserRole {
  Admin = "admin",
  User = "user",
}

export enum PrintTypeEnum {
  PrintType_Contract = 1,
  PrintType_Inventory = 2,
  PrintType_DeclaratieInchidereAnticipataContract = 3,
  PrintType_DeclaratieBeneficiarRealContract = 4,
  PrintType_AcordSubInchiriere = 5,
  PrintType_DeclaratieGDPR = 99,
}