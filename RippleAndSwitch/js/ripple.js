const allSquares = document.querySelectorAll('.ripple-square');
const ripple = document.createElement('div');
ripple.classList = 'ripple';


for(let i=0; i<allSquares.length; i++) {
    allSquares[i].addEventListener('click', function(e) {
        e.preventDefault();
        let x = parseInt(e.pageX - this.offsetLeft - 50);
        let y = parseInt(e.pageY - this.offsetTop - 50);
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        e.target.append(ripple);
        ripple.classList.add('expand');

        // If checkbox then this
        if (  this.getElementsByTagName('input')[0]) {
            let checkbox = this.getElementsByTagName('input')[0];
            checkbox.checked = !checkbox.checked;
        }
        
    });
}