Array.prototype.forEach.call (

    // take all classes by file-upload__button
    document.querySelectorAll('.file-upload__button'),

   function (btn) {
        // console.log(btn.parentElement.querySelector('.file-upload__input'))

        const inputHidden = btn.parentElement.querySelector('.file-upload__input');

        const label = btn.parentElement.querySelector(".file-upload__label");
        const defaultLabelText = "No file(s) selected";

        // set default text for label
        label.textContent = defaultLabelText;
        label.title = defaultLabelText;
        // console.log(label.title)

        btn.addEventListener("click", function() {
            inputHidden.click();
        });

        
        inputHidden.addEventListener("change", function() {

            // files
            const filenameList = Array.prototype.map.call(inputHidden.files, function(file) {
                console.log(file.name);
                return file.name;
            });
    
            // console.log(filenameList);
            label.textContent = filenameList.join(", ") || defaultLabelText;
            label.title = label.textContent;

            // console.log(label);
        });

   }

);


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// console.log(document.querySelector('.file-upload__button'));
// console.log(document.querySelectorAll('.file-upload__button'));

// const btn = document.querySelectorAll('.file-upload__button');

// Array.prototype.forEach.call (btn, (e) => {console.log(e)})