import React,{useEffect} from 'react'


import {UXKeyForm} from 'uxkeyform'
import {MyInput} from 'wcinput' 
import {MyCalendar} from 'wccalendar'
import {MyCombo} from 'wccombo'
import {MyComboSearch} from 'wccombosearch'
import {MyInputNum} from 'wcinputnum'
import {MyInputDecimal} from 'wcinputdecimal'
import {MyInputDate} from 'wcinputdate'
import {MyInputDateTime} from 'wcinputdatetime'
import {MyInputMask} from 'wcinputmask'
import {MyInputCurrency} from 'wcinputcurrency'
import {MyInputCreditCard} from 'wcinputcreditcard'

import 'cssformfixbasic01'

import {datos,mesas,categorias,articulos} from '/src/listInMemory.js'


export const MyForm = (props) => {
  //console.log(props.id)
    useEffect(() => {
      var keys= new UXKeyForm({
        id: props.id
      });
    },[]);
    
     return (
        <form id={props.id } className="form-fix-basic-01 " >
          
          <MyInput id="text1" name="nombre" msgText="Nombre" msgPlaceHolder="Introduce nombre"></MyInput>
          <MyCalendar id="cal1" name="fecha" msgText="Introduce Fecha"></MyCalendar>
          <MyCombo id="combo2" name="mesa" data={mesas} msgText="Introduce mesas" nameField="descripcion" ></MyCombo>
          <MyCombo id="combo1" name="articulos"data={articulos} msgText="Introduce familia" nameField="descripcion" ></MyCombo>
          <MyComboSearch id="search01" name="categoria" data={datos} msgPlaceHolder="Introduce busqueda" nameField="description" ></MyComboSearch>
          <MyInputNum required id="num01" name="numero" msgText="Numero" msgWarning="Numero Obligatorio" msgPlaceHolder="Introduce numero"></MyInputNum>  
          <MyInputDecimal id="decimal01" msgPlaceHolder="Decimal" scale="4" />
          <MyInputDate id="date01" msgPlaceHolder="Fecha" />
          <MyInputDateTime id="datetime01" msgPlaceHolder="fecha tiempo" />
          <MyInputMask id="mask01" mask="(000) 00 00 00" />
          <MyInputMask id="numero01" mask={Number} />
          <MyInputCurrency id="currency01" scale="3" />
          <MyInputCurrency id="currency02" />
          <MyInputCreditCard id="credit01" />
           
        </form>
    );
}


