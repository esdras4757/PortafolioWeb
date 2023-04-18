import React, { useState } from "react";
import { Button, Card, Carousel, Input, Row, Select, Tag } from "antd";
import { isArray, isEmpty, isNil } from "lodash";
import { useEffect } from "react";

const customButtonStyle = {
    borderRadius: 15,
    border: 0,
    height: 35,
    padding: '0 20px',
    display: 'flex',
    margin:'5px 15px',
    alignItems: 'center'
  };


const ALL ={
    Todos:'Todos',
    "":"",
    All:'All'
}



const Filters = ({
  t,i18n,selectedValues,setSelectedValues,defaultValues,setDefaultValues,valuesEdit,setValuesEdit,chipsEdit,setChipsEdit
}) => {

  const catalogs = {
    Area: [
      { id: 0, text: t('Filters.all'), isSelected: true },
      { id: 1, text: t('Filters.programming'), isSelected: false },
      { id: 2, text: t('Filters.robotics'), isSelected: false },
      { id: 3, text: t('Filters.ai'), isSelected: false },
    ],
    Duracion: [
      { id: 0, text: t('Filters.all'), isSelected: true },
      { id: 1, text: t('Filters.short'), isSelected: false },
      { id: 2, text: t('Filters.medium'), isSelected: false },
      { id: 3, text: t('Filters.long'), isSelected: false },
    ],
    Tecnologias:[
      { id: 0, text: t('Filters.all'), isSelected: true },
      { id: 1, text: t('Filters.javascript'), isSelected: false },
      { id: 7, text: t('Filters.react'), isSelected: false },
      { id: 8, text: t('Filters.axios'), isSelected: false },
      { id: 6, text: t('Filters.c++'), isSelected: false },
      { id: 2, text: t('Filters.python'), isSelected: false },
      { id: 3, text: t('Filters.nodejs'), isSelected: false },
      { id: 4, text: t('Filters.opencv'), isSelected: false },
      { id: 5, text: t('Filters.tensorflow'), isSelected: false },
      { id: 5, text:  t('Filters.Electronics'), isSelected: false },
      { id: 5, text:  t('Filters.Automation'), isSelected: false },
      { id: 5, text: 'Control', isSelected: false }
    ],
    Name:''
  };

  const checkStorage = (name) => {
    return JSON.parse(sessionStorage.getItem(name));
  };

  useEffect(() => {
    console.log(defaultValues);
  }, [defaultValues]);

  useEffect(() => {

    if (localStorage.getItem('lenguage')) {
      const lng=localStorage.getItem('lenguage')
      i18n.changeLanguage(lng);
    }
  }, []);


  useEffect(() => {
    if (!checkStorage("initialValues")) {
      const initialValues = Object.keys(catalogs).reduce((acc, key) => {
        acc[key] = getDefaults(catalogs[key]);
        return acc;
      }, {});
      console.log(initialValues)
      setDefaultValues(initialValues);
      setValuesEdit(initialValues);
      sessionStorage.setItem("initialValues", JSON.stringify(initialValues));
      sessionStorage.setItem("valuesEdit", JSON.stringify(initialValues));
    } else if (checkStorage("valuesEdit")) {
      setValuesEdit(JSON.parse(sessionStorage.getItem("valuesEdit")));
    }
  }, [i18n.language]);

  const formatCatalogs = (catalog) => {
    console.log(catalog);
    const option = catalog.map((catal) => {
      return {
        label: catal.text,
        value: catal.text,
      };
    });

    return option;
  };

  useEffect(() => {
    if (!isEmpty(valuesEdit)&&!isNil(valuesEdit)) {
      sessionStorage.setItem("valuesEdit", JSON.stringify(valuesEdit));
      const values = Object.keys(valuesEdit).reduce((acc, key) => {
        acc = { ...acc, [key]: { chipId: key, chipName: key, chipText: isArray(valuesEdit[key])? valuesEdit[key].join(', '):valuesEdit[key] } };
        return acc;
      }, {});

      console.log(Object.values(values))
      setChipsEdit(Object.values(values))
    }
  }, [valuesEdit]);

  const getDefaults = (catalog) => {

    if (!isArray(catalog)) {
        return ''
    }

    const selectedItems = catalog.filter((cat) => {
      return cat.isSelected === true;
    });

    const selectedTexts = selectedItems.map((item) => {
      return item.text;
    });

    console.log(selectedTexts);
    return selectedTexts;
  };

  const handleSelectChange = (values, name) => {
    console.log(values);
    if (!isArray(values)) {
        setValuesEdit({ ...valuesEdit, [name]: values })
        return
    }

    if (isEmpty(valuesEdit) == false) {
      if (isEmpty(values)) {
        setValuesEdit({ ...valuesEdit, [name]: [t('Filters.all')] });
        return;
      }

      const allSelected = values.includes(t('Filters.all'));
      const previousAllSelected = valuesEdit[name].includes(t('Filters.all'));

      if (allSelected && !previousAllSelected) {
        setValuesEdit({ ...valuesEdit, [name]: ["Todos"] });
      } else if (!allSelected && previousAllSelected) {
        const newValues = values.filter((value) => value !== t('Filters.all'));
        setValuesEdit({ ...valuesEdit, [name]: newValues });
      } else if (!allSelected) {
        setValuesEdit({ ...valuesEdit, [name]: values });
      } else {
        const newValues = values.filter((value) => value !== t('Filters.all'));
        setValuesEdit({ ...valuesEdit, [name]: newValues });
      }
    }
  };
  return (
    <Row className="col-12 mt-5 mb-5 justify-content-center">
      <div className="col-11 p-4" style={{ border: "1px solid #888" }}>
        <Row>
        <div className="col-4 order-1 order-md-1 text-start">
            <i className="fas fa-filter" /> Filters
          </div>
          <div className="col-12 order-1 mt-4 order-md-2 col-md-4">
          {isEmpty(chipsEdit) == false && 
            chipsEdit.map((chip)=>{
                if(isNil(ALL[chip.chipText]) == true){
                    return <Tag className="mt-2"><strong>{chip.chipName}</strong>: {chip.chipText}</Tag>
                }
          })
          }
           </div>
        </Row>
        <Row className="justify-content-around mt-4">
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mx-2">
          <label className="col-12 basic-paragraph font-weight-bold">
              {t('Filters.name')}
            </label>
            <Input
              allowClear={false}
              style={{ width: "100%", color:"white" }}
              placeholder=""
              value={valuesEdit.Name}
              defaultValue={""}
                 onChange={(e) => handleSelectChange(e.target.value, "Name")}
             
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mx-2">
          <label className="col-12 basic-paragraph font-weight-bold">
            {t('Filters.area')}
            </label>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              value={valuesEdit.Area}
              onChange={(e) => handleSelectChange(e, "Area")}
              options={formatCatalogs(catalogs.Area)}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mx-2">
          <label className="col-12 basic-paragraph font-weight-bold">
            {t('Filters.technologies')}
            </label>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              value={valuesEdit.Tecnologias}
              onChange={(e) => handleSelectChange(e, "Tecnologias")}
              options={formatCatalogs(catalogs.Tecnologias)}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mx-2">
          <label className="col-12 basic-paragraph font-weight-bold">
            {t('Filters.duration')}
            </label>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              value={valuesEdit.Duracion}
              onChange={(e) => handleSelectChange(e, "Duracion")}
              options={formatCatalogs(catalogs.Duracion)}
            />
          </div>
        </Row>
        <Row className="col-12 mt-4 justify-content-center">
          <Button type="default" style={customButtonStyle} onClick={e=>setValuesEdit(checkStorage('initialValues'))}>{t('Filters.clean')}</Button>
        </Row>
      </div>
    </Row>
  );
  
  
  
  return (
    <Row className="col-12 mt-5 mb-5 justify-content-center">
      <div className="col-11 p-4" style={{ border: "1px solid #888" }}>
        <Row>
          <div className="col-4 text-start">
            <i className="fas fa-filter" /> Filters
          </div>
          <div className="col-4">
          {isEmpty(chipsEdit) == false && 
            chipsEdit.map((chip)=>{
                if(isNil(ALL[chip.chipText]) == true){
                    return <Tag><strong>{chip.chipName}</strong>: {chip.chipText}</Tag>
                }
          })
          }
           </div>
          <div className="col-4 text-end">
            {" "}
            <i className="fas fa-chevron-up" /> {t('Filters.filters')}
          </div>
        </Row>

        <Row className="justify-content-around mt-4">
        <div className="col-2 mx-2">
            <label className="col-12 basic-paragraph font-weight-bold">
              {t('Filters.name')}
            </label>
            <Input
              allowClear={false}
              style={{ width: "100%", color:"white" }}
              placeholder=""
              value={valuesEdit.Name}
              defaultValue={""}
                 onChange={(e) => handleSelectChange(e.target.value, "Name")}
             
            />
          </div>
          <div className="col-2 mx-2">
            <label className="col-12 basic-paragraph font-weight-bold">
            {t('Filters.area')}
            </label>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              value={valuesEdit.Area}
              onChange={(e) => handleSelectChange(e, "Area")}
              options={formatCatalogs(catalogs.Area)}
            />
          </div>

          <div className="col-2 mx-2">
            <label className="col-12 basic-paragraph font-weight-bold">
            {t('Filters.technologies')}
            </label>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              value={valuesEdit.Tecnologias}
              onChange={(e) => handleSelectChange(e, "Tecnologias")}
              options={formatCatalogs(catalogs.Tecnologias)}
            />
          </div>

          <div className="col-2 mx-2">
            <label className="col-12 basic-paragraph font-weight-bold">
            {t('Filters.duration')}
            </label>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              value={valuesEdit.Duracion}
              onChange={(e) => handleSelectChange(e, "Duracion")}
              options={formatCatalogs(catalogs.Duracion)}
            />
          </div>

          <Row className="col-12 mt-4 justify-content-center">
          <Button type="default" style={customButtonStyle} onClick={e=>setValuesEdit(checkStorage('initialValues'))}>{t('Filters.clean')}</Button>
          <Button type="primary" style={customButtonStyle}>{t('Filters.search')}</Button>
          </Row>
          
        </Row>
      </div>
    </Row>
  );
};

export default Filters;
