let active_error = false;

function append_operation(operation) {
    
    if (active_error == true) { return 0; }

    document.getElementById('result_area').innerHTML += operation;
    

}


function calculate_result() {

    if (active_error == true) { return 0; }

    let container = document.getElementById('result_area');
    let result;

    try {
        result = eval(container.innerHTML);
    } catch {
        result = '#ERROR!';
        active_error = true;
        document.getElementById('clear_btn').innerHTML = 'AC';
    }

    container.innerHTML = result;
    
}


function delete_last() {

    let container = document.getElementById('result_area');

    if (active_error == true) {

        container.innerHTML = '';
        active_error = false;
        document.getElementById('clear_btn').innerHTML = 'C';

    } else {

        if (container.innerHTML.endsWith(' ')) {
            container.innerHTML = container.innerHTML.slice(0, -3);
        } else {
            container.innerHTML = container.innerHTML.slice(0, -1);
        }

    }

}


function coming_soon() {
    window.alert('coming soon: this function is not avalible now');
}


