import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import './assets/main.css'
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import ColorPicker from 'primevue/colorpicker';
import Calendar from 'primevue/calendar';
import InputSwitch from 'primevue/inputswitch';
import RadioButton from 'primevue/radiobutton';
import TriStateCheckbox from 'primevue/tristatecheckbox';
import FileUpload from 'primevue/fileupload';
import Textarea from 'primevue/textarea';
import i18n from './locales/i18n'
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dialog from 'primevue/dialog';


import 'primevue/resources/themes/md-dark-indigo/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import '/node_modules/primeflex/primeflex.css'

import router from "./router"

const app = createApp(App);

app.use(PrimeVue);
app.use(i18n);
app.use(router);

app.component('Button', Button);
app.component('InputText', InputText);
app.component('InputMask', InputMask);
app.component('InputNumber', InputNumber);
app.component('Dropdown', Dropdown);
app.component('ColorPicker', ColorPicker);
app.component('Calendar', Calendar);
app.component('InputSwitch', InputSwitch);
app.component('RadioButton', RadioButton);
app.component('TriStateCheckbox', TriStateCheckbox);
app.component('FileUpload', FileUpload);
app.component('Textarea', Textarea);
app.component('pv-datatable', DataTable);
app.component('pv-column', Column);
app.component('pv-dialog', Dialog);



app.mount('#app')
