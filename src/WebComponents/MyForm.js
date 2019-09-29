import React from 'react'
import MyInput from 'src/lib/MyInput.js' 
import MyCalendar from 'src/lib/MyCalendar.js'
import MyCombo from 'src/lib/MyCombo.js'
import MyComboSearch from 'src/lib/MyComboSearch.js'

import 'src/components/forms/03form-fix-basic-01.css'

import {datos,mesas,categorias,articulos} from '/src/listInMemory.js'

const MyForm = () => {
     
    return (
        <form id="form01" className="form-fix-basic-01 " >
          <MyInput id="text1" msgText="Nombre" msgPlaceHolder="Introduce nombre"></MyInput>
          <MyCalendar id="cal1"  msgText="Introduce Fecha"></MyCalendar>
          <MyCombo id="combo2" data={mesas} msgText="Introduce mesas" nameField="descripcion" ></MyCombo>
          <MyCombo id="combo1" data={articulos} msgText="Introduce familia" nameField="descripcion" ></MyCombo>
          <MyComboSearch id="search01"  data={datos} msgPlaceHolder="Introduce busqueda" nameField="description" ></MyComboSearch>
            
        </form>
    )
}
export default MyForm;