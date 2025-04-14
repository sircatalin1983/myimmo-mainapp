import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
    name: 'interpolate'
})
export class InterpolatePipe implements PipeTransform {
    transform(value: string): string {
        console.log('value:', value)
        return value
            .replace('{{PARAM_COMPANY_NAME}}', environment.company.name)
            .replace('{{PARAM_COMPANY_CUI}}', environment.company.cui)
            .replace('{{PARAM_COMPANY_J}}', environment.company.j);
    }
}
 


// company: {
//     name: "SC LogicLand SRL", //{{PARAM_COMPANY_NAME}}
//     j: "",                    //{{PARAM_COMPANY_J}}
//     cui: "",
//     management: "s",
//     registerLocation: "s2",
//     website: "propero.io",
//     address: {
//       no: "",
//       street: "",
//       building: "",
//       floor: "",
//       apartament: "",
//       city: "",
//       county: "",
//       country: ""
//     },
//     contactInfo: {
//       person: "",
//       telephone: "",
//       email: "",
//       ontacttTelephone: "+40 743 366 266",
//       contactEmail: "contact@propero.io",
//       privacyEmail: "privacy@propero.io",
//       salesEmail: "sales@propero.io",
//       dpoEmail: "dpo@propero.io",
//     }
//   }