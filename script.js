function append_operation(operation) {
    
    document.getElementById('result_area').innerHTML += operation;

}


function calculate_result() {

    let container = document.getElementById('result_area');
    let result = eval(container.innerHTML);

    container.innerHTML = result;
    
}


function delete_last() {

    let container = document.getElementById('result_area');

    if (container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0, -3);
    } else {
        container.innerHTML = container.innerHTML.slice(0, -1);
    }

}


function coming_soon() {
    window.alert('coming soon: this function is not avalible now');
}