Object.assign(window.search, {"doc_urls":["introduction.html#关于本书","fortran-style-guide.html#fortran风格指导","fortran-style-guide.html#命名规则","floating-point-numbers.html#浮点数"],"index":{"documentStore":{"docInfo":{"0":{"body":15,"breadcrumbs":0,"title":0},"1":{"body":0,"breadcrumbs":2,"title":1},"2":{"body":6,"breadcrumbs":1,"title":0},"3":{"body":4,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"作者：Ondřej Čertík、John Pask、Jed Brown、Matthew Emmett、Juan Luis Cano Rodríguez、Neil Carlson、Andrea Vigliotti、Pierre Haessig、Vincent Magnin、Sebastian Ehlert、Jeremie Vandenplas 此书收集了一些现代且规范编写Fortran的方法，将针对常见的话题和任务进行代码风格指导，以及推荐最佳实践方法。总而言之，它会列举和讨论一些规范的解决方案和模式。这本书主要面向已经对Fortran语法和编写有基本了解的编程者。","breadcrumbs":"关于 » 关于本书","id":"0","title":"关于本书"},"1":{"body":"","breadcrumbs":"Fortran风格指导 » Fortran风格指导","id":"1","title":"Fortran风格指导"},"2":{"body":"虽然如何命名取决于个人偏好，但是我们在这里给出一份我们喜欢的，并且在很多科学计算代码（以及Fortran standard library）中流行的风格。欢迎你也使用这一风格。 在所有Fortran结构中使用小写字母（do、subroutine、module……） 对于数学变量/函数使用简短的数学上的记号（Ylm、Gamma、gamma、Enl、Rnl……） 其他的名字全部都用小写字母：尽量让名字为一到两个音节；如果需要更多音节，则用下划线使其看着清晰（sortpair、whitechar、meshexp、numstrings、linspace、meshgrid、argsort、spline、spline_interp、spline_interpolate、stoperr、stop_error、meshexp_der）","breadcrumbs":"Fortran风格指导 » 命名规则","id":"2","title":"命名规则"},"3":{"body":"integer, parameter :: dp = selected_real_kind(15)","breadcrumbs":"浮点数 » 浮点数","id":"3","title":"浮点数"}},"length":4,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"b":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"n":{"df":0,"docs":{},"、":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}}}}}},"c":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}},"r":{"df":0,"docs":{},"l":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"、":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"d":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"h":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"、":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}}}}},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"、":{"df":0,"docs":{},"j":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"í":{"df":0,"docs":{},"k":{"df":0,"docs":{},"、":{"df":0,"docs":{},"j":{"df":0,"docs":{},"o":{"df":0,"docs":{},"h":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}}},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}},"的":{"df":0,"docs":{},"方":{"df":0,"docs":{},"法":{"df":0,"docs":{},"，":{"df":0,"docs":{},"将":{"df":0,"docs":{},"针":{"df":0,"docs":{},"对":{"df":0,"docs":{},"常":{"df":0,"docs":{},"见":{"df":0,"docs":{},"的":{"df":0,"docs":{},"话":{"df":0,"docs":{},"题":{"df":0,"docs":{},"和":{"df":0,"docs":{},"任":{"df":0,"docs":{},"务":{"df":0,"docs":{},"进":{"df":0,"docs":{},"行":{"df":0,"docs":{},"代":{"df":0,"docs":{},"码":{"df":0,"docs":{},"风":{"df":0,"docs":{},"格":{"df":0,"docs":{},"指":{"df":0,"docs":{},"导":{"df":0,"docs":{},"，":{"df":0,"docs":{},"以":{"df":0,"docs":{},"及":{"df":0,"docs":{},"推":{"df":0,"docs":{},"荐":{"df":0,"docs":{},"最":{"df":0,"docs":{},"佳":{"df":0,"docs":{},"实":{"df":0,"docs":{},"践":{"df":0,"docs":{},"方":{"df":0,"docs":{},"法":{"df":0,"docs":{},"。":{"df":0,"docs":{},"总":{"df":0,"docs":{},"而":{"df":0,"docs":{},"言":{"df":0,"docs":{},"之":{"df":0,"docs":{},"，":{"df":0,"docs":{},"它":{"df":0,"docs":{},"会":{"df":0,"docs":{},"列":{"df":0,"docs":{},"举":{"df":0,"docs":{},"和":{"df":0,"docs":{},"讨":{"df":0,"docs":{},"论":{"df":0,"docs":{},"一":{"df":0,"docs":{},"些":{"df":0,"docs":{},"规":{"df":0,"docs":{},"范":{"df":0,"docs":{},"的":{"df":0,"docs":{},"解":{"df":0,"docs":{},"决":{"df":0,"docs":{},"方":{"df":0,"docs":{},"案":{"df":0,"docs":{},"和":{"df":0,"docs":{},"模":{"df":0,"docs":{},"式":{"df":0,"docs":{},"。":{"df":0,"docs":{},"这":{"df":0,"docs":{},"本":{"df":0,"docs":{},"书":{"df":0,"docs":{},"主":{"df":0,"docs":{},"要":{"df":0,"docs":{},"面":{"df":0,"docs":{},"向":{"df":0,"docs":{},"已":{"df":0,"docs":{},"经":{"df":0,"docs":{},"对":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},"结":{"df":0,"docs":{},"构":{"df":0,"docs":{},"中":{"df":0,"docs":{},"使":{"df":0,"docs":{},"用":{"df":0,"docs":{},"小":{"df":0,"docs":{},"写":{"df":0,"docs":{},"字":{"df":0,"docs":{},"母":{"df":0,"docs":{},"（":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"、":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"、":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}}}}}}}},"df":0,"docs":{}}}}}},"h":{"a":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"、":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"l":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"m":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"、":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"ř":{"df":0,"docs":{},"e":{"df":0,"docs":{},"j":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}},"p":{"a":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"k":{"df":0,"docs":{},"、":{"df":0,"docs":{},"j":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"í":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"z":{"df":0,"docs":{},"、":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"d":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"l":{"_":{"df":0,"docs":{},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"(":{"1":{"5":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"、":{"df":0,"docs":{},"w":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"、":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"、":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"s":{"df":0,"docs":{},"、":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"、":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"、":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"、":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"、":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"p":{"df":0,"docs":{},"、":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"、":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"、":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"_":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"、":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"p":{"_":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}}}}},"t":{"a":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"v":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"、":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}}}}}}}},"y":{"df":0,"docs":{},"l":{"df":0,"docs":{},"m":{"df":0,"docs":{},"、":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"、":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"、":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"l":{"df":0,"docs":{},"、":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}}},"breadcrumbs":{"root":{"b":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"n":{"df":0,"docs":{},"、":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}}}}}},"c":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}},"r":{"df":0,"docs":{},"l":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"、":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"d":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"h":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"、":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}}}}},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"、":{"df":0,"docs":{},"j":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"í":{"df":0,"docs":{},"k":{"df":0,"docs":{},"、":{"df":0,"docs":{},"j":{"df":0,"docs":{},"o":{"df":0,"docs":{},"h":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}}},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":1.7320508075688772},"2":{"tf":1.4142135623730951}},"的":{"df":0,"docs":{},"方":{"df":0,"docs":{},"法":{"df":0,"docs":{},"，":{"df":0,"docs":{},"将":{"df":0,"docs":{},"针":{"df":0,"docs":{},"对":{"df":0,"docs":{},"常":{"df":0,"docs":{},"见":{"df":0,"docs":{},"的":{"df":0,"docs":{},"话":{"df":0,"docs":{},"题":{"df":0,"docs":{},"和":{"df":0,"docs":{},"任":{"df":0,"docs":{},"务":{"df":0,"docs":{},"进":{"df":0,"docs":{},"行":{"df":0,"docs":{},"代":{"df":0,"docs":{},"码":{"df":0,"docs":{},"风":{"df":0,"docs":{},"格":{"df":0,"docs":{},"指":{"df":0,"docs":{},"导":{"df":0,"docs":{},"，":{"df":0,"docs":{},"以":{"df":0,"docs":{},"及":{"df":0,"docs":{},"推":{"df":0,"docs":{},"荐":{"df":0,"docs":{},"最":{"df":0,"docs":{},"佳":{"df":0,"docs":{},"实":{"df":0,"docs":{},"践":{"df":0,"docs":{},"方":{"df":0,"docs":{},"法":{"df":0,"docs":{},"。":{"df":0,"docs":{},"总":{"df":0,"docs":{},"而":{"df":0,"docs":{},"言":{"df":0,"docs":{},"之":{"df":0,"docs":{},"，":{"df":0,"docs":{},"它":{"df":0,"docs":{},"会":{"df":0,"docs":{},"列":{"df":0,"docs":{},"举":{"df":0,"docs":{},"和":{"df":0,"docs":{},"讨":{"df":0,"docs":{},"论":{"df":0,"docs":{},"一":{"df":0,"docs":{},"些":{"df":0,"docs":{},"规":{"df":0,"docs":{},"范":{"df":0,"docs":{},"的":{"df":0,"docs":{},"解":{"df":0,"docs":{},"决":{"df":0,"docs":{},"方":{"df":0,"docs":{},"案":{"df":0,"docs":{},"和":{"df":0,"docs":{},"模":{"df":0,"docs":{},"式":{"df":0,"docs":{},"。":{"df":0,"docs":{},"这":{"df":0,"docs":{},"本":{"df":0,"docs":{},"书":{"df":0,"docs":{},"主":{"df":0,"docs":{},"要":{"df":0,"docs":{},"面":{"df":0,"docs":{},"向":{"df":0,"docs":{},"已":{"df":0,"docs":{},"经":{"df":0,"docs":{},"对":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},"结":{"df":0,"docs":{},"构":{"df":0,"docs":{},"中":{"df":0,"docs":{},"使":{"df":0,"docs":{},"用":{"df":0,"docs":{},"小":{"df":0,"docs":{},"写":{"df":0,"docs":{},"字":{"df":0,"docs":{},"母":{"df":0,"docs":{},"（":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"、":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"、":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}}}}}}}},"df":0,"docs":{}}}}}},"h":{"a":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"、":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"l":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"m":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"、":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"ř":{"df":0,"docs":{},"e":{"df":0,"docs":{},"j":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}},"p":{"a":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"k":{"df":0,"docs":{},"、":{"df":0,"docs":{},"j":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"í":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"z":{"df":0,"docs":{},"、":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"d":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"l":{"_":{"df":0,"docs":{},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"(":{"1":{"5":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"、":{"df":0,"docs":{},"w":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"、":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"、":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"s":{"df":0,"docs":{},"、":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"、":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"、":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"、":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"、":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"p":{"df":0,"docs":{},"、":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"、":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"、":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"_":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"、":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"p":{"_":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}}}}},"t":{"a":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"v":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"、":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}}}}}}}},"y":{"df":0,"docs":{},"l":{"df":0,"docs":{},"m":{"df":0,"docs":{},"、":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"、":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"、":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"l":{"df":0,"docs":{},"、":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}}},"title":{"root":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});