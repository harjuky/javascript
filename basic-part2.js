<SCRIPT language = "Javascript">
function show(){
 
  var name_rules=document.getElementById("form_utopian").select1.value;
  var rules_description=document.getElementById("description");
 
  if (name_rules=="tutorial")
    {
      rules_description.innerHTML="Tutorials may only be about the technical aspects of the project or how-tos for the final users";
    }
  else if (name_rules=="video-tutorial")
    {
      rules_description.innerHTML="The video and audio recording should be in HD (720 the min)";
    }
  else if (name_rules=="suggestions")
    {
      rules_description.innerHTML="Suggestions are minor features/enhancements that you would like to have in an Open Source project";
    }
}
</script>
