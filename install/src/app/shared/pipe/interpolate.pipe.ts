import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
    name: 'interpolate'
})
export class InterpolatePipe implements PipeTransform {
    transform(value: string): string {
        return value
            .replace('{{PARAM_COMPANY_NAME}}', environment.company.name)
            .replace('{{PARAM_COMPANY_CUI}}', environment.company.cui)
            .replace('{{PARAM_COMPANY_J}}', environment.company.j);
    }
}
