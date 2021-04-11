import React from 'react';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Appoint() {

  const classes = useStyles();
  const history = useHistory();

    return (
        <div>
        <link type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?themeRevisionID=5f7ed99c2c2c7240ba580251" />
        <style type="text/css" id="form-designer-style" dangerouslySetInnerHTML={{__html: "\n    /* Injected CSS Code */\n\n  \n  \n*,\n*:after,\n*:before {\n  box-sizing: border-box;\n}\n.form-all {\n  font-family: \"Inter\", sans-serif;\n}\n.main .jotform-form {\n  width: 100%;\n  padding: 0 3%;\n}\n.form-all {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 752px;\n}\n.form-line-active {\n  background-color: #ffffe0;\n}\n.form-all {\n  font-size: 16px;\n}\nli.form-line {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n.form-line {\n  padding: 12px 10px;\n}\n.form-section {\n  padding: 0px 38px;\n}\n.form-textbox,\n.form-textarea {\n  padding: 1px 10px 1px 10px;\n}\n.form-textbox,\n.form-textarea,\n.form-radio-other-input,\n.form-checkbox-other-input,\n.form-captcha input,\n.form-spinner input {\n  background-color: #ffffff;\n}\n.form-label {\n  font-family: \"Inter\", sans-serif;\n}\n.form-line-column {\n  width: calc(50% - 8px);\n}\n.form-line-column.form-line-column-clear {\n  width: calc(43%);\n}\n.form-iframe-container .formFooter {\n  font-size: 16px;\n}\n.form-iframe-container .formFooter-leftSide {\n  margin-left: 52px;\n  margin-right: 0;\n}\n.form-iframe-container .formFooter-rightSide {\n  position: absolute;\n  right: 34%;\n}\n.form-checkbox-item label,\n.form-checkbox-item span,\n.form-radio-item label,\n.form-radio-item span {\n  color: #404a64;\n}\n.form-radio-item,\n.form-checkbox-item {\n  padding-bottom: 0px !important;\n}\n.form-radio-item:last-child,\n.form-checkbox-item:last-child {\n  padding-bottom: 0;\n}\n.form-single-column .form-checkbox-item,\n.form-single-column .form-radio-item {\n  width: 100%;\n}\n.form-checkbox-item .editor-container div,\n.form-radio-item .editor-container div {\n  position: relative;\n}\n.form-checkbox-item .editor-container div:before,\n.form-radio-item .editor-container div:before {\n  display: inline-block;\n  vertical-align: middle;\n  left: 0;\n  width: 20px;\n  height: 20px;\n}\n.form-all .form-pagebreak-back,\n.form-all .form-pagebreak-next {\n  font-size: 1em;\n  padding: 9px 15px;\n  font-family: \"Inter\", sans-serif;\n  font-size: 16px;\n  font-weight: normal;\n}\n.form-all .qq-upload-button,\n.form-all .form-submit-button,\n.form-all .form-submit-reset,\n.form-all .form-submit-print {\n  font-size: 1em;\n  padding: 9px 15px;\n  font-family: \"Inter\", sans-serif;\n  font-size: 16px;\n  font-weight: normal;\n}\nli[data-type=\"control_image\"] div {\n  text-align: left;\n}\nli[data-type=\"control_image\"] img {\n  border: none;\n  border-width: 0px !important;\n  border-style: solid !important;\n  border-color: false !important;\n}\n.supernova {\n  height: 100%;\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  background-position: center top;\n  background-repeat: repeat;\n}\n.supernova {\n  background-image: none;\n}\n#stage {\n  background-image: none;\n}\n/* | */\n.form-all {\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  background-position: center top;\n  background-repeat: repeat;\n}\n.form-header-group {\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  background-position: center top;\n}\n.header-large h1.form-header {\n  font-size: 2em;\n}\n.header-large h2.form-header {\n  font-size: 1.5em;\n}\n.header-large h3.form-header {\n  font-size: 1.17em;\n}\n.header-large h1 + .form-subHeader {\n  font-size: 1em;\n}\n.header-large h2 + .form-subHeader {\n  font-size: .875em;\n}\n.header-large h3 + .form-subHeader {\n  font-size: .75em;\n}\n.header-default h1.form-header {\n  font-size: 2em;\n}\n.header-default h2.form-header {\n  font-size: 1.5em;\n}\n.header-default h3.form-header {\n  font-size: 1.17em;\n}\n.header-default h1 + .form-subHeader {\n  font-size: 1em;\n}\n.header-default h2 + .form-subHeader {\n  font-size: .875em;\n}\n.header-default h3 + .form-subHeader {\n  font-size: .75em;\n}\n.header-small h1.form-header {\n  font-size: 2em;\n}\n.header-small h2.form-header {\n  font-size: 1.5em;\n}\n.header-small h3.form-header {\n  font-size: 1.17em;\n}\n.header-small h1 + .form-subHeader {\n  font-size: 1em;\n}\n.header-small h2 + .form-subHeader {\n  font-size: .875em;\n}\n.header-small h3 + .form-subHeader {\n  font-size: .75em;\n}\n.form-header-group {\n  text-align: left;\n}\n.form-header-group {\n  font-family: \"Inter\", sans-serif;\n}\ndiv.form-header-group.header-large {\n  margin: 0px -38px;\n}\ndiv.form-header-group.header-large {\n  padding: 40px 52px;\n}\n.form-line-error {\n  overflow: hidden;\n  -webkit-transition-property: none;\n  -moz-transition-property: none;\n  -ms-transition-property: none;\n  -o-transition-property: none;\n  transition-property: none;\n  -webkit-transition-duration: 0.3s;\n  -moz-transition-duration: 0.3s;\n  -ms-transition-duration: 0.3s;\n  -o-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease;\n  -moz-transition-timing-function: ease;\n  -ms-transition-timing-function: ease;\n  -o-transition-timing-function: ease;\n  transition-timing-function: ease;\n  background-color: #fff4f4;\n}\n.form-line-error .form-error-message {\n  background-color: #f23a3c;\n  clear: both;\n  float: none;\n}\n.form-line-error .form-error-message .form-error-arrow {\n  border-bottom-color: #f23a3c;\n}\n.form-line-error input:not(#coupon-input),\n.form-line-error textarea,\n.form-line-error .form-validation-error {\n  border: 1px solid #f23a3c;\n  box-shadow: 0 0 3px #f23a3c;\n}\n.supernova {\n  background-color: #ffffff;\n  background-color: #fef6e4;\n}\n.supernova body {\n  background-color: transparent;\n}\n.supernova .form-all,\n.form-all {\n  background-color: #ffffff;\n}\n.form-textbox,\n.form-textarea,\n.form-radio-other-input,\n.form-checkbox-other-input,\n.form-captcha input,\n.form-spinner input {\n  background-color: #ffffff;\n}\n.form-matrix-table tr {\n  border-color: #e6e6e6;\n}\n.form-matrix-table tr:nth-child(2n) {\n  background-color: #f2f2f2;\n}\n.form-all {\n  color: #2c3345;\n}\n.form-label-top,\n.form-label-left,\n.form-label-right,\n.form-html {\n  color: #2c3345;\n}\n.form-line-error {\n  overflow: hidden;\n  -webkit-transition-property: none;\n  -moz-transition-property: none;\n  -ms-transition-property: none;\n  -o-transition-property: none;\n  transition-property: none;\n  -webkit-transition-duration: 0.3s;\n  -moz-transition-duration: 0.3s;\n  -ms-transition-duration: 0.3s;\n  -o-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease;\n  -moz-transition-timing-function: ease;\n  -ms-transition-timing-function: ease;\n  -o-transition-timing-function: ease;\n  transition-timing-function: ease;\n  background-color: #fff4f4;\n}\n\n/*PREFERENCES STYLE*/\n    .form-all {\n      font-family: Inter, sans-serif;\n    }\n    .form-all .qq-upload-button,\n    .form-all .form-submit-button,\n    .form-all .form-submit-reset,\n    .form-all .form-submit-print {\n      font-family: Inter, sans-serif;\n    }\n    .form-all .form-pagebreak-back-container,\n    .form-all .form-pagebreak-next-container {\n      font-family: Inter, sans-serif;\n    }\n    .form-header-group {\n      font-family: Inter, sans-serif;\n    }\n    .form-label {\n      font-family: Inter, sans-serif;\n    }\n  \n    .form-label.form-label-auto {\n      \n    display: block;\n    float: none;\n    text-align: left;\n    width: 100%;\n  \n    }\n  \n    .form-line {\n      margin-top: 12px;\n      margin-bottom: 12px;\n    }\n  \n    .form-all {\n      max-width: 752px;\n      width: 100%;\n    }\n  \n    .form-label.form-label-left,\n    .form-label.form-label-right,\n    .form-label.form-label-left.form-label-auto,\n    .form-label.form-label-right.form-label-auto {\n      width: 230px;\n    }\n  \n    .form-all {\n      font-size: 16px\n    }\n    .form-all .qq-upload-button,\n    .form-all .qq-upload-button,\n    .form-all .form-submit-button,\n    .form-all .form-submit-reset,\n    .form-all .form-submit-print {\n      font-size: 16px\n    }\n    .form-all .form-pagebreak-back-container,\n    .form-all .form-pagebreak-next-container {\n      font-size: 16px\n    }\n  \n    .supernova .form-all, .form-all {\n      background-color: #fff;\n    }\n  \n    .form-all {\n      color: #001858;\n    }\n    .form-header-group .form-header {\n      color: #001858;\n    }\n    .form-header-group .form-subHeader {\n      color: #001858;\n    }\n    .form-label-top,\n    .form-label-left,\n    .form-label-right,\n    .form-html,\n    .form-checkbox-item label,\n    .form-radio-item label {\n      color: #001858;\n    }\n    .form-sub-label {\n      color: #1a3272;\n    }\n  \n    .supernova {\n      background-color: #fef6e4;\n    }\n    .supernova body {\n      background: transparent;\n    }\n  \n    .form-textbox,\n    .form-textarea,\n    .form-dropdown,\n    .form-radio-other-input,\n    .form-checkbox-other-input,\n    .form-captcha input,\n    .form-spinner input {\n      background-color: #fff;\n    }\n  \n    .supernova {\n      background-image: none;\n    }\n    #stage {\n      background-image: none;\n    }\n  \n    .form-all {\n      background-image: none;\n    }\n  \n  .ie-8 .form-all:before { display: none; }\n  .ie-8 {\n    margin-top: auto;\n    margin-top: initial;\n  }\n  \n  /*PREFERENCES STYLE*//*__INSPECT_SEPERATOR__*/\n.form-section.page-section {\n    border : 5px solid #8bd3dd;\n}\n\n\n    /* Injected CSS Code */\n" }} />
        <form className="jotform-form" action="https://submit.jotform.com/submit/210993285723462/" method="post" name="form_210993285723462" id={210993285723462} acceptCharset="utf-8" autoComplete="on">
          <input type="hidden" name="formID" defaultValue={210993285723462} />
          
          <div role="main" className="form-all">
            <ul className="form-section page-section">
              <li id="cid_1" className="form-input-wide" data-type="control_head">
                <div className="form-header-group  header-large">
                  <div className="header-text httac htvam">
                    <h1 id="header_1" className="form-header" data-component="header">
                      COVID-19 Vaccine Appointment Form
                    </h1>
                  </div>
                </div>
              </li>
              
              <li className="form-line" data-type="control_appointment" id="id_6">
                <label className="form-label form-label-top" id="label_6" htmlFor="input_6"> Book Appointment </label>

                <input id="Date" name="Date" type="date" placeholder="date" class="date-picker"></input>

                <input id="Date" name="Date" type="time" placeholder="date" class="form-control input-md"></input>
                
                
      {/* <div className="form-group">
        
        <div className="col-md-4"> 
          <label className="radio-inline" htmlFor="radios-0">
            <input type="radio" name="radios" id="radios-0" defaultValue={1} defaultChecked="checked" />
            9 AM
          </label> 
          <label className="radio-inline" htmlFor="radios-1">
            <input type="radio" name="radios" id="radios-1" defaultValue={2} />
            12 PM
          </label> 
          <label className="radio-inline" htmlFor="radios-2">
            <input type="radio" name="radios" id="radios-2" defaultValue={3} />
            3 PM
          </label> 
          <label className="radio-inline" htmlFor="radios-3">
            <input type="radio" name="radios" id="radios-3" defaultValue={4} />
            6 PM
          </label>
        </div>
      </div> */}
  
                
                <div id="cid_6" className="form-input-wide" data-layout="full">
                  <div id="input_6" className="appointmentFieldWrapper jfQuestion-fields">
                   
                    <div className="appointmentField">
                    </div>
                  </div>
                </div>
              </li>
              <li className="form-line" data-type="control_button" id="id_2">
                <div id="cid_2" className="form-input-wide" data-layout="full">
                  <div data-align="auto" className="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField">
                    <button id="input_2" type="submit" className="form-submit-button form-submit-button-simple_carolina_blue submit-button jf-form-buttons jsTest-submitField" data-component="button" data-content>
                      Submit
                    </button>
                  </div>
                </div>
              </li>
              
            </ul>
          </div>
          
         
         
        </form>
        <div style={{textAlign:'center'}}>
        <Button
            type="button"
            variant="contained"
            color="primary"
            size="medium"
            className={classes.submit}
            onClick = {()=>history.push("/medCen")}
          >
            Search Near by Medical Centers
          </Button>
        </div>

      </div>
    );
}