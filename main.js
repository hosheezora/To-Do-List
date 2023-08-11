window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
  const adding = document.querySelector("#new-task-submit");
	const list_el = document.querySelector("#tasks");
  const h1 = document.querySelector('h1');
  const h2 = document.querySelector('h2');
  const turnMode = document.querySelector('#turn-mode');
  const modeButton = document.querySelector('button#turn-mode p');
  const cheader = document.getElementsByClassName('header')[0];

  // const ubahWarna = document.createElement('button');
  // const textTombol = document.createTextNode('turn mode');
  // ubahWarna.appendChild('textTombol');
  // ubahWarna.setAttribute('type', 'button');



  // modeButton.addEventListener('click', function(){
  //   modeButton.classList.toggle('font-color');
  //   document.body.classList.toggle('white-color');
  //   h1.classList.toggle('font-color');
  //   input.classList.toggle('input-string');
  //   // adding.classList.toggle('add-button');
  //   h2.classList.toggle('font-color');
  //   adding.classList.toggle('add-day');


  // })

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

    if (!task){
      alert(" Fill out task form first!!");

    }

    else {

      const task_el = document.createElement('div');
      task_el.classList.add('task');
  
      const task_content_el = document.createElement('div');
      task_content_el.classList.add('content');
  
      task_el.appendChild(task_content_el);
  
      const task_input_el = document.createElement('input');
      task_input_el.classList.add('text');
      task_input_el.type = 'text';
      task_input_el.value = task;
      task_input_el.setAttribute('readonly', 'readonly');
  
      task_content_el.appendChild(task_input_el);
  
      const task_actions_el = document.createElement('div');
      task_actions_el.classList.add('actions');
      
      const task_edit_el = document.createElement('button');
      task_edit_el.classList.add('edit');
      task_edit_el.innerText = 'Edit';
  
      const task_delete_el = document.createElement('button');
      task_delete_el.classList.add('delete');
      task_delete_el.innerText = 'Delete';
  
      task_actions_el.appendChild(task_edit_el);
      task_actions_el.appendChild(task_delete_el);
  
      task_el.appendChild(task_actions_el);
  
      list_el.appendChild(task_el);
  
      input.value = '';
  
      task_edit_el.addEventListener('click', (e) => {
        if (task_edit_el.innerText.toLowerCase() == "edit") {
          task_edit_el.innerText = "Save";
          task_input_el.removeAttribute("readonly");
          task_input_el.focus();
        } else {
          task_edit_el.innerText = "Edit";
          task_input_el.setAttribute("readonly", "readonly");
        }
      });
  
      task_delete_el.addEventListener('click', (e) => {
        list_el.removeChild(task_el);
      });
    }
	});
});