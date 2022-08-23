let index

var chefListItem = [...document.getElementsByClassName("chef-list-item")] 
var chefListCta = [...document.getElementsByClassName("chef-list-item-cta")]
var chefImg = document.getElementById('img-top-chef')
var imagePath = ['assets/img/chef-image.png','assets/img/chef-image-2.png', 'assets/img/chef-image-3.png', 'assets/img/chef-image-4.png']
chefListItem.forEach((item, index) => {
    item.addEventListener("click", () => tabChange(index))
})
let tempIndex = 0
function tabChange(index) {

    chefListItem[tempIndex].className = chefListItem[index].className.replace(" chef-item-active", "");
    chefListCta[tempIndex].className = chefListCta[index].className.replace(" chef-list-item-cta-show", "");
    tempIndex = index
    chefListItem[index].className += " chef-item-active"
    chefListCta[index].className += " chef-list-item-cta-show"
    chefImg.src = imagePath[index]
}