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


import 'primevue/resources/themes/md-dark-indigo/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import '/node_modules/primeflex/primeflex.css'

const app = createApp(App);
app.use(PrimeVue);
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

app.mount('#app')
