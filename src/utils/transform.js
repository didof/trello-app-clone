export const capitalize = (string, everyWord) => {
   let updatedString
   if(everyWord) {
      updatedString = string.split(' ')
      return updatedString.map(word => capitalizeFirstChar(word)).join(' ')
   }

   function capitalizeFirstChar(string) {
      updatedString = Array.from(string)
      let [removed] = updatedString.splice(0, 1)
      updatedString.splice(0, 0, removed.toUpperCase())
      return updatedString.join('')
   }

   return capitalizeFirstChar(string)


   
   
}