import React from 'react'
import MyInput from 'src/lib/MyInput.js' 
import MyCalendar from 'src/lib/MyCalendar.js'
import MyCombo from 'src/lib/MyCombo.js'

import 'src/components/forms/03form-fix-basic-01.css'

const MyForm = () => {
     
    return (
        <form id="form01" className="form-fix-basic-01 " >
          <MyInput msgText="Nombre" msgPlaceHolder="Introduce nombre"></MyInput>
          <MyCalendar id="cal1"  msgText="Introduce Fecha"></MyCalendar>
          <MyCombo id="combo1" msgText="Introduce familia" ></MyCombo>
      
       
     
        </form>
    )
}
export default MyForm;