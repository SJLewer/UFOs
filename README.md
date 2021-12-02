# UFOs

## Overview of the Analysis
Enhance the UFO Sightings webpage to provide a more in-depth analysis of UFO sightings by allowing users to filter for multiple criteria (date, city, state, country, and shape) at the same time.

## Results - How to search the data table using the Filter Search:
 
 * Launch the webpage via index.html (https://github.com/SJLewer/UFOs/blob/main/index.html)
 
 * In the Filter Search section (left side of the data table), placeholder entry examples ("1/10/20", "roswell", "ca", etc.) are provided in each filter option.  

     ![image1](https://user-images.githubusercontent.com/90986041/144345474-29c01012-23f1-43d4-aa83-fc6ff6549149.png)
 
 * The data table will update automatically as filters are entered in lower-case.  See example below after "light" is entered in the Shape filter.
  
     ![image2](https://user-images.githubusercontent.com/90986041/144345612-af431efb-df40-4bbc-9fb9-857972c8306b.png)

  * Single filters (shown above) or multiple filters (shown below) can be entered.
 
     ![Image3](https://user-images.githubusercontent.com/90986041/144345707-0bd79a9b-631d-4077-be10-9decfefed3cd.png)

 * To restore the original data table, delete entered filters.
 
 
## Summary:
  While the dynamic filters are working as designed, there are a couple of drawbacks:
  
  1. The user must have familiarity with the data set to know available options for each filter.  
     - _Recommended enhancement:_ Include a drop-down selection list for each filter option.  Consider creating a dynamic drop-down list that will automatically update (versus           having to manually update a list in the code) based on the data file.  This way, when revised data files are used, the drop-down lists will update automatically based on               the new respective values.  
  
  1. As noted above, entries in the Filter Search boxes must be entered in lower-case.  
      - _Recommended enhancement:_ Consider adding code to allow either upper or lower case entries. (ex. "US" or "us")  See this stackoverflow question/answer for ideas:
           https://stackoverflow.com/questions/43582408/how-can-i-make-my-search-form-work-with-uppercase-and-lowercase
      ___
## Resources
_Data Source_: 

_HTML_: https://github.com/SJLewer/UFOs/blob/main/index.html
_JavaScript_:

_Analyst_: S. Lewer
