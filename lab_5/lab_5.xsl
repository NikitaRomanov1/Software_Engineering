<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version = "1.0"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >
<xsl:template match="/">
   <html>
   <body>
   <h2>Tariffs</h2>
   <table border="1">
     <tr bgcolor="#FFE4B5">
       <th>Name</th>
       <th>Operator_name</th>
       <th>Payroll</th>
       <th>Call_prices</th>
       <th>Sms_price</th>
       <th>Parameters</th>
     </tr>
     <xsl:for-each select="tariffs/tariff">
     <xsl:sort select="payroll"  order="descending"/>
     <tr>
       <td><xsl:value-of select="name"/></td>
       <td><xsl:value-of select="operator_name"/></td>
       <td><xsl:value-of select="payroll"/></td>
     <td>
         <ul>
             <li><span>inside: </span><xsl:value-of select="call_prices/inside "/></li>
             <li><span>outside: </span><xsl:value-of select="call_prices/outside "/></li>
             <li><span>landline: </span><xsl:value-of select="call_prices/landline "/></li>
         </ul>
    </td>

     <td><xsl:value-of select="sms_price"/></td>
    <td>
         <ul>
             <li><span>favourite_number: </span><xsl:value-of select="parameters/favourite_number"/></li>
             <li><span>rate: </span><xsl:value-of select="parameters/rate "/></li>
             <li><span>connectionPayment: </span><xsl:value-of select="parameters/connectionPayment "/></li>
         </ul>
    </td>
     </tr>
     </xsl:for-each>
   </table>
   </body>
   </html>
</xsl:template>

</xsl:stylesheet>