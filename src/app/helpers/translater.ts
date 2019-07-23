import { Observable } from 'rxjs';
import { TranslateLoader } from "@ngx-translate/core";
import { of } from 'rxjs/internal/observable/of';

class CustomLoader implements TranslateLoader {
    constructor() {

    }
    getTranslation(lang: string): any {
        if (lang == 'en') {
            return { "Hello": "English Hello" }
        } else {
            return {"Hello":"Japan Hello"}
        }
    }
}