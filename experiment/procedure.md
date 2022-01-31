<u>**Aim of the experiment: Fault scenario simulation in a Transformer /Bus**</u>

The occurrence of fault in a Transformer or Bus makes the corresponding circuit breaker to open and depending on configuration, the power to feeder load varies.  
To simulate this condition, the process is as below:

<u>**Fault on transformer 1**</u>

1. Prefault condition is taken as  
   45A flowing in Feeder 1(with 3 switches on)  
   30A flowing in Feeder 2(with 2 switches on)

<u>Reading on meters</u>

<table>
<tr>
<th colspan=3>M1</th>
<th colspan=3>M2</th>
<th colspan=3>M3</th>
</tr>

<tr>
<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>
 
<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>

<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>
</tr>

<tr>
<td>11 </td>
<td>45</td>
<td>857.36</td>

<td>11 </td>
<td>30</td>
<td>571.57</td>

<td>33 </td>
<td>25</td>
<td>1423.94</td>
</tr>
</table>

2. Create fault on transformer 1. CB2 opens. CB2 Color changes to blue
3. Feeder1 supply is cut off.

<u>Reading on meters</u>

<table>
<tr>
<th colspan=3>M1</th>
<th colspan=3>M2</th>
<th colspan=3>M3</th>
</tr>

<tr>
<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>
 
<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>

<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>
</tr>

<tr>
<td>0</td>
<td>0</td>
<td>0</td>

<td>11 </td>
<td>30</td>
<td>571.57</td>

<td>33 </td>
<td>10</td>
<td>571.57</td>
</tr>
</table>

<u>**Fault on Transformer 2**</u>

1. Prefault condition is taken as  
   45A flowing in Feeder 1(with 3 switches on)  
   30A flowing in Feeder 2(with 2 switches on)

<u>Reading on meters</u>

<table>
<tr>
<th colspan=3>M1</th>
<th colspan=3>M2</th>
<th colspan=3>M3</th>
</tr>

<tr>
<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>
 
<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>

<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>
</tr>

<tr>
<td>11 </td>
<td>45</td>
<td>857.36</td>

<td>11 </td>
<td>30</td>
<td>571.57</td>

<td>33 </td>
<td>25</td>
<td>1423.94</td>
</tr>
</table>

2. Create fault on transformer 1. CB3 opens. CB3 Color changes to blue.
3. Feeder2 supply is cut off.

<u>Reading on meters</u>

<table>
<tr>
<th colspan=3>M1</th>
<th colspan=3>M2</th>
<th colspan=3>M3</th>
</tr>

<tr>
<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>
 
<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>

<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>
</tr>

<tr>
<td>11 </td>
<td>45</td>
<td>857.36</td>

<td>0</td>
<td>0</td>
<td>0</td>

<td>33 </td>
<td>15</td>
<td>857.36</td>
</tr>
</table>

<u>**Fault on 33 KV Bus**</u>

1. Prefault condition is taken as  
   45A flowing in Feeder 1(with 3 switches on)  
   30A flowing in Feeder 2(with 2 switches on)

<u>Reading on meters</u>

<table>
<tr>
<th colspan=3>M1</th>
<th colspan=3>M2</th>
<th colspan=3>M3</th>
</tr>

<tr>
<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>
 
<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>

<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>
</tr>

<tr>
<td>11 </td>
<td>45</td>
<td>857.36</td>

<td>11 </td>
<td>30</td>
<td>571.57</td>

<td>33 </td>
<td>25</td>
<td>1423.94</td>
</tr>
</table>

2. Create fault on 33 kV bus.
3. CB1 opens. CB1 Color changes to blue.

<u>Reading on meters</u>

<table>
<tr>
<th colspan=3>M1</th>
<th colspan=3>M2</th>
<th colspan=3>M3</th>
</tr>

<tr>
<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>
 
<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>

<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>
</tr>

<tr>
<td>0</td>
<td>0</td>
<td>0</td>

<td>0</td>
<td>0</td>
<td>0</td>

<td>0</td>
<td>0</td>
<td>0</td>
</tr>
</table>
