# react_select_ocp14

This plugin was designed as part of the last project of the Openclassrooms training, front-end developer.


# Install

    npm install react_select_ocp14

## Use plugin

    const  array = [
    {
	value :  "fromage",
	title :  "Fromage"
	},

	{
	value :  "chocolat",
	title :  "Chocolat"
	},
	]
    const [state, setState] = useState(array[0].value)
    <Select  options={array}  label="course"  title="Liste de courses"  stateValue={state}  onChangeValue={setState}/>



## Props

|Name                |Type                          |Example                         |
|----------------|-------------------------------|-----------------------------|
|label|String|           |
|title|String|           |
|componentStyle|Object| `modalStyle={{display:"flex"}}`          |
|labelStyle|Object| `modalStyle={{display:"flex"}}`          |
|selectStyle|Object| `modalStyle={{display:"flex"}}`          |
|optionStyle|Object| `modalStyle={{display:"flex"}}`          |
|onChangeValue|useState|        |
|stateValue|useState|        |






