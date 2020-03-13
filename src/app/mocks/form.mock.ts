import { FieldItem } from '../models/field-item';
import { Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Form } from '../models/form';

// export const FieldItems: FieldItem[] = [
//     {
//         id: Guid.create().toString(),
//         name: "test1",
//         required: true,
//         type: "input",
//         placeholder: "Test Input",
//         label: "Test Label",
//         order: 2,
//         width:3,
//         validations: [
//             {
//                 name: "required",
//                 validator: Validators.required,
//                 message: `Label is Required.`,
//             },
//         ],
//     },
//     {
//         id: Guid.create().toString(),
//         name: "testradiobutton",
//         required: true,
//         type: "radiobutton",
//         label: "Test Label",
//         isInlineRadio: false,
//         order: 2,
//         width:3,
//         validations: [
//             {
//                 name: "required",
//                 validator: Validators.required,
//                 message: `Label is Required.`,
//             },
//         ],
//         options: [
//             { id: Guid.create().toString(), value: "Option 1", },
//             { id: Guid.create().toString(), value: "Option 2", },
//             { id: Guid.create().toString(), value: "Option 3", },
//             { id: Guid.create().toString(), value: "Option 4", },
//         ],
//     },
//     {
//         id: Guid.create().toString(),
//         name: "range",
//         required: true,
//         type: "range",
//         label: "Test Range",
//         minValue: 1,
//         maxValue:6,
//         order: 2,
//         width:3,
//         validations: [
//             {
//                 name: "required",
//                 validator: Validators.required,
//                 message: `Range is Required.`,
//             },
//         ],
//     },
//     {
//         id: Guid.create().toString(),
//         name: "test12",
//         required: true,
//         type: "summernote",
//         placeholder: "Test Summernote",
//         label: "Test Summernote Label",
//         order: 9,
//         width:12,
//         validations: [
//             {
//                 name: "required",
//                 validator: Validators.required,
//                 message: `Label is Required.`,
//             },
//         ],
//     },
//     {
//         id: Guid.create().toString(),
//         name: "textarea12",
//         required: true,
//         type: "textarea",
//         placeholder: "Test Summernote",
//         label: "Test Summernote Label",
//         order:10,
//         width:12,
//         validations: [
//             {
//                 name: "required",
//                 validator: Validators.required,
//                 message: `Label is Required.`,
//             },
//         ],
//     },
//     {
//         id: Guid.create().toString(),
//         name: "test",
//         required: true,
//         minlength: 3,
//         maxlength: 20,
//         type: "input",
//         placeholder: "Test Input",
//         label: "Test Label 2",
//         order: 3,
//         width:3,
//         validations: [
//             {
//                 name: "required",
//                 validator: Validators.required,
//                 message: `Label is Required.`,
//             },
//             {
//                 name: "minlength",
//                 validator: Validators.minLength(3),
//                 message: `Minimum Length of Label is 3 Characters.`
//             },
//             {
//                 name: "maxlength",
//                 validator: Validators.maxLength(20),
//                 message: `Maximum Length of Label is 20 Characters.`
//             },
//         ],
//     },
//     {
//         id: Guid.create().toString(),
//         name: "date",
//         required: true,
//         type: "date",
//         placeholder: "Test Date",
//         label: "Test Label",
//         order: 2,
//         width:6,
//         validations: [
//             {
//                 name: "required",
//                 validator: Validators.required,
//                 message: `Test Label is Required.`,
//             },
//         ],
//     },
//     {
//         id: Guid.create().toString(),
//         name: "daterange",
//         type: "daterange",
//         placeholder: "Test Date",
//         label: "Test Label",
//         order: 2,
//         width:6,
//     },
//     {
//         id: Guid.create().toString(),
//         name: "testnumber",
//         required: true,
//         minValue: 3,
//         maxValue: 20,
//         type: "input",
//         inputType: "number",
//         placeholder: "Test Number",
//         label: "Test Label Number",
//         order: 3,
//         width:4,
//         validations: [
//             {
//                 name: "required",
//                 validator: Validators.required,
//                 message: `Test Label Number is Required.`,
//             },
//         ],
//     },
//     {
//         id: Guid.create().toString(),
//         name: "testselect",
//         required: true,
//         type: "select",
//         placeholder: "Test Select",
//         label: "Test Label Select",
//         order: 6,
//         width:9,
//         options: [
//             { id: Guid.create().toString(), value: "Option 1", },
//             { id: Guid.create().toString(), value: "Option 2", },
//             { id: Guid.create().toString(), value: "Option 3", },
//             { id: Guid.create().toString(), value: "Option 4", },
//         ],
//         validations: [
//             {
//                 name: "required",
//                 validator: Validators.required,
//                 message: `Test Label Number is Required.`,
//             },
//         ],
//     },
//     {
//         id: Guid.create().toString(),
//         name: "testmultiple",
//         required: true,
//         type: "multicheckbox",
//         placeholder: "Test",
//         label: "Test Multiple",
//         order: 3,
//         width:3,
//         options: [
//             { id: Guid.create().toString(), value: "Option 1", disabled:false },
//             { id: Guid.create().toString(), value: "Option 2", disabled:false },
//             { id: Guid.create().toString(), value: "Option 3", disabled:false },
//             { id: Guid.create().toString(), value: "Option 4", disabled:false },
//         ],
//         validations: [
//             {
//                 name: "required",
//                 validator: Validators.required,
//                 message: `Choose at least one`,
//             },
//         ],
//     },
//     {
//         id: Guid.create().toString(),
//         name: "testselect2",
//         required: true,
//         type: "radio",
//         placeholder: "Test Select",
//         label: "Test Label Select",
//         order: 5,
//         width:8,
//         isInlineRadio: true,
//         options: [
//             { id: Guid.create().toString(), value: "Option 1", },
//             { id: Guid.create().toString(), value: "Option 2", },
//             { id: Guid.create().toString(), value: "Option 3", },
//             { id: Guid.create().toString(), value: "Option 4", },
//         ],
//         validations: [
//             {
//                 name: "required",
//                 validator: Validators.required,
//                 message: `Test Label Number is Required.`,
//             },
//         ],
//     },
//     {
//         id: Guid.create().toString(),
//         name: "testcheckbox",
//         required: true,
//         type: "checkbox",
//         placeholder: "You Must Accept",
//         label: "Test Label Select",
//         order: 5,
//         width:4,
//         value:null,
//         validations: [
//             {
//                 name: "required",
//                 validator: Validators.requiredTrue,
//                 message: `You Must Accept.`,
//             },
//         ],
//     },
// ];

// export const FormItem: Form = {
//     isHorizontal: false,
//     editMode:true,
//     name: 'MY TEST FORM',
//     fieldItems: FieldItems,
// }
