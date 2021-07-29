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

        console.log(inputHidden);
        inputHidden.addEventListener("change", function() {

            console.log(inputHidden.files);

            // Array.prototype.forEach.call(inputHidden.files, file => console.log(file));
            // Array.from(inputHidden.files).forEach(file => { console.log(file); });

            // inputHidden.files is an object prototyped on FileList; just like HTMLCollection, it does not have Array.prototype in its prototype chain

            // files
            const filenameList = Array.prototype.map.call(inputHidden.files, function(file) {
                // console.log(file);
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

const btn = document.querySelectorAll('.file-upload__button');

console.log(btn);
Array.prototype.forEach.call (btn, (e) => {console.log(e)})



