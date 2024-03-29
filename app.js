let data;
async function fetchData () 
{
    const res = await fetch ('./data.json');

    if (!res.ok)
        throw new Error ('Something went wrong getting data.');

    data = await res.json();


handleCheckboxChange ();
}

fetchData ();

const checkbox =document.querySelector ('.component_switch_checkbox');
checkbox.addEventListener ('change', handleCheckboxChange);


function handleCheckboxChange ()
{
    if (checkbox.checked)
        setCosts (data.annually);
    else
        setCosts (data.monthly);
}


function setCosts (arr)
{
    document.querySelectorAll ('.component_plan').forEach ((el, index) =>{
        el.classList.add ('change-plan');
        
        setTimeout(() => {
            el.querySelector ('.component_plan_cost').innerHTML = `<span>$</span>${arr[index]}`
        }, 300);

        setTimeout (() => el.classList.remove ('change-plan'), 300);
    });
}