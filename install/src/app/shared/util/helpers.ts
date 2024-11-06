import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import { forkJoin, Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

export class Helpers {
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

    static getObservable(itemList) {
        let observable;
        if (itemList.length === 0) {
            observable = of(null); // emits immediately to proceed with the pipeline
        } else {
            observable = forkJoin(itemList);
        }
        return observable;
    }

    static stripHtmlTags(htmlContent: string): string {
        const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
        return doc.body.textContent || "";
    }

    static replacePlaceholders(template, data) {
        return template.replace(/---(.*?)---/g, function (match, key) {
            // console.log('Matching Placeholder:', match);
            // console.log('Key:', key);

            var keys = key.trim().split('.');
            var value = data;
            for (var i = 0; i < keys.length; i++) {
                // console.log('Current Key:', keys[i]);
                // console.log('Current Value:', value);

                if (value != null) {
                    value = value[keys[i]];
                } else {
                    value = undefined;
                    break;
                }
            }

            // Check if value is a Date and format it
            if (value instanceof Date) {
                value = Helpers.formatDate(value);
            }

            //console.log('Final Value:', value);
            return value !== undefined ? value : match;
        });
    }

    static formatDate(dateParam: Date): string {
        var dateFormat: string = environment.dateFormat;
        var datePipe = new DatePipe('en-US');


        // const date = new Date(dateParam);

        // const day = date.getDate().toString().padStart(2, '0');
        // const month = (date.getMonth() + 1).toString().padStart(2, '0');
        // const year = date.getFullYear();
        return datePipe.transform(dateParam, dateFormat);
        //return `${day}-${month}-${year}`;
    }

    static consoleError(startTime, constructorName, methodName, error = null, additionalMessage = "") {
        const endTime = new Date().getTime();
        const executionTime = endTime - startTime;
        environment.error && console.error(`error: ${constructorName}: ${methodName}: Start Time: ${startTime} ms, End Time: ${endTime} ms, Execution Time: ${executionTime} ms :error:`, error, additionalMessage == "" ? "" : " additionalMessage:", additionalMessage);
    }

    static consoleInfo(startTime, constructorName, methodName, results = null, additionalMessage = "") {
        const endTime = new Date().getTime();
        const executionTime = endTime - startTime;
        environment.info && console.info(`info: ${constructorName}: ${methodName}: Start Time: ${startTime} ms, End Time: ${endTime} ms, Execution Time: ${executionTime} ms :subscribe:`, results, additionalMessage == "" ? "" : " additionalMessage:", additionalMessage);
    }

    static getMethodName() {
        return new Error().stack.split('\n')[2].trim().split(' ')[1];
    }
}

@Component({
    selector: 'information-message',
    //templateUrl: 'information-message.component.html',
    template: `
              <span class="success-message">
                Mesajul salvat cu success!!!
              </span>`,
    styles: [`
      .success-message {
        color: #90EE90;
        text-align: center;
      }
    `],
  })
  export class InformationComponent { }
  
  @Component({
    selector: 'error-message',
    //templateUrl: 'information-message.component.html',
    template: `
              <span class="error-message">
                Eroare la trimiterea de mesaje!!!
              </span>`,
    styles: [`
      .error-message {
        color: #FF0000;
        text-align: center;
      }
    `],
  })
  export class ErrorComponent { }