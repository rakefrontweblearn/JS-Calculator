function doAdd()
		   {				
				var var3 = document.getElementById("var3").value;
					
				if( var3 !== "")
				{					
					document.getElementById("var1").value = var3;
					document.getElementById("var2").value="";
					document.getElementById("var3").value="";
					document.getElementById("symbol").innerHTML = ('+');
				}

					else
					{
						
						document.getElementById("symbol").innerHTML = ('+');
					}							
		    }		
				
				
		   function add(num1,num2)
		    {	
				var total = num1+num2;
                return total;
			
		    }
				
	         // for Difference
		   function doDifference()
		   {
				var var3 = document.getElementById("var3").value;
					
				if( var3 !== "")
				{
					
					document.getElementById("var1").value = var3;
					document.getElementById("var2").value="";
					document.getElementById("var3").value="";
					document.getElementById("symbol").innerHTML = ('-');
				}

					else
					{
						
						document.getElementById("symbol").innerHTML = ('-');
					}		
					
					
			}		
				
		   function diff(num1,num2)
		   {	
					var total = num1-num2;
                    return total;
					
		   }
				
				
		// for Product
		
		   function doProduct()
			{
				
				var var3 = document.getElementById("var3").value;
					
				if( var3 !== "")
				{
					
					document.getElementById("var1").value = var3;
					document.getElementById("var2").value="";
					document.getElementById("var3").value="";
					document.getElementById("symbol").innerHTML = ('*');
				}

					else
					{
						
						document.getElementById("symbol").innerHTML = ('*');
					}		
					
			}		
				
		   function prod(num1,num2)
			{	
				var total = num1*num2;
                return total;
					
			}
				
		// for Divison
		
		   function doDivison()
			{
				
				var var3 = document.getElementById("var3").value;
					
				if( var3 !== "")
				{
					
					document.getElementById("var1").value = var3;
					document.getElementById("var2").value="";
					document.getElementById("var3").value="";
					document.getElementById("symbol").innerHTML = ('/');
				}

					else
					{
						
						document.getElementById("symbol").innerHTML = ('/');
					}		
			}		
				
		   function divs(num1,num2)
			{	
				var total = num1/num2;
				return total;
					
			}
				
		// for clear
		
		   function doClear()
			{					
				clearUi("var1");
				clearUi("var2"); 
				clearUi("var3");
				clearHtml("symbol");
			}		
				
		   function clearUi(id)
			{	
				document.getElementById(id).value = "";
					
			}
		   function clearHtml(id)
			{	
				document.getElementById(id).innerHTML = "";
					
			}
	// For do result
			function doResult()
			{
					
				var var1 = document.getElementById("var1").value;
				var var2 = document.getElementById("var2").value;
				var symbol = document.getElementById("symbol").innerHTML;
				
				if(var1==""||var2==""||var3 ==""||symbol=="")
				{
								
					alert ("fill the box");
				}
				
					else 
					{							
								
						if(symbol.includes("+"))
					    {   	
							var result = add(parseInt(var1),parseInt(var2));
							document.getElementById("var3").value = result;	
			     		}
						
						else if(symbol.includes("-"))
						{
							var result = diff(parseInt(var1),parseInt(var2));
							document.getElementById("var3").value = result;	
						}
						
						else if(symbol.includes("*"))
						{
							var result = prod(parseInt(var1), parseInt(var2));
							document.getElementById("var3").value = result;
						}
						
						else if(symbol.includes("/"))
						{
							var result = divs(parseInt(var1), parseInt(var2));
							document.getElementById("var3").value = result;
						}
									 
				    }
								
								
								
			}
			
     // For undo
			
	/*	if(var1 !=="" && var2 !=="" && symbol !=="" && var3 !=="")
				{
					var doundo = document.getElementById("doundo").value;
					document.getElementById("var1").value = doundo;
					document.getElementById("symbol").value = doundo;
					document.getElementById("var2").value = doundo;
					document.getElementById("var3").value = doundo;
				}   */
				
				function visibleInput()
					{
						
					}
