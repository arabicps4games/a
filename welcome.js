/*var yourAge = prompt("your age?");

if (yourAge exist){

	alert("welcome"+" "+yourAge);

}
else{

	alert("sorry");

}
*/



/*



var yourName = prompt("your name? ما هو اسمك؟");
if (yourName === "") {
    alert("welcome مرحبا بك صلي على النبي");
} else if (yourName) {
    alert("welcome مرحبا بك صلي على النبي"+" "+yourName);
} else {
    alert("welcome مرحبا بك صلي على النبي");
}
*/



var myArray = [
  "الحمد لله",
  "استغفر الله",
  "لا حول و لا قوة الا بالله",
  "اشهد ان لا الاه الا الله و اشهد ان محمدا رسول الله",
  "اللهم صلي و سلم على سيدنا محمد",
  "الحَمدُ لِلَّهِ رَبِّ العالَمينَ",
  "الرَّحمٰنِ الرَّحيمِ",
  "مالِكِ يَومِ الدّينِ",
  "إِيّاكَ نَعبُدُ وَإِيّاكَ نَستَعينُ",
  "اهدِنَا الصِّراطَ المُستَقيمَ",
  "صِراطَ الَّذينَ أَنعَمتَ عَلَيهِم غَيرِ المَغضوبِ عَلَيهِم وَلَا الضّالّينَ",
  "الم",
  "ذٰلِكَ الكِتابُ لا رَيبَ ۛ فيهِ ۛ هُدًى لِلمُتَّقينَ",
  "الَّذينَ يُؤمِنونَ بِالغَيبِ وَيُقيمونَ الصَّلاةَ وَمِمّا رَزَقناهُم يُنفِقونَ",
  "وَالَّذينَ يُؤمِنونَ بِما أُنزِلَ إِلَيكَ وَما أُنزِلَ مِن قَبلِكَ وَبِالآخِرَةِ هُم يوقِنونَ",
  "أُولٰئِكَ عَلىٰ هُدًى مِن رَبِّهِم ۖ وَأُولٰئِكَ هُمُ المُفلِحونَ",
  "إِنَّ الَّذينَ كَفَروا سَواءٌ عَلَيهِم أَأَنذَرتَهُم أَم لَم تُنذِرهُم لا يُؤمِنونَ",
  "خَتَمَ اللَّهُ عَلىٰ قُلوبِهِم وَعَلىٰ سَمعِهِم ۖ وَعَلىٰ أَبصارِهِم غِشاوَةٌ ۖ وَلَهُم عَذابٌ عَظيمٌ",
  "وَمِنَ النّاسِ مَن يَقولُ آمَنّا بِاللَّهِ وَبِاليَومِ الآخِرِ وَما هُم بِمُؤمِنينَ",
  "يُخادِعونَ اللَّهَ وَالَّذينَ آمَنوا وَما يَخدَعونَ إِلّا أَنفُسَهُم وَما يَشعُرونَ",
  "في قُلوبِهِم مَرَضٌ فَزادَهُمُ اللَّهُ مَرَضًا ۖ وَلَهُم عَذابٌ أَليمٌ بِما كانوا يَكذِبونَ",
  "وَإِذا قيلَ لَهُم لا تُفسِدوا فِي الأَرضِ قالوا إِنَّما نَحنُ مُصلِحونَ",
  "أَلا إِنَّهُم هُمُ المُفسِدونَ وَلٰكِن لا يَشعُرونَ",
  "وَإِذا قيلَ لَهُم آمِنوا كَما آمَنَ النّاسُ قالوا أَنُؤمِنُ كَما آمَنَ السُّفَهاءُ ۗ أَلا إِنَّهُم هُمُ السُّفَهاءُ وَلٰكِن لا يَعلَمونَ",
  "وَإِذا لَقُوا الَّذينَ آمَنوا قالوا آمَنّا وَإِذا خَلَوا إِلىٰ شَياطينِهِم قالوا إِنّا مَعَكُم إِنَّما نَحنُ مُستَهزِئونَ",
  "اللَّهُ يَستَهزِئُ بِهِم وَيَمُدُّهُم في طُغيانِهِم يَعمَهونَ",
  "أُولٰئِكَ الَّذينَ اشتَرَوُا الضَّلالَةَ بِالهُدىٰ فَما رَبِحَت تِجارَتُهُم وَما كانوا مُهتَدينَ",
  "مَثَلُهُم كَمَثَلِ الَّذِي استَوقَدَ نارًا فَلَمّا أَضاءَت ما حَولَهُ ذَهَبَ اللَّهُ بِنورِهِم وَتَرَكَهُم في ظُلُماتٍ لا يُبصِرونَ",
  "صُمٌّ بُكمٌ عُميٌ فَهُم لا يَرجِعونَ",
  "أَو كَصَيِّبٍ مِنَ السَّماءِ فيهِ ظُلُماتٌ وَرَعدٌ وَبَرقٌ يَجعَلونَ أَصابِعَهُم في آذانِهِم مِنَ الصَّواعِقِ حَذَرَ المَوتِ ۚ وَاللَّهُ مُحيطٌ بِالكافِرينَ",
  "يَكادُ البَرقُ يَخطَفُ أَبصارَهُم ۖ كُلَّما أَضاءَ لَهُم مَشَوا فيهِ وَإِذا أَظلَمَ عَلَيهِم قاموا ۚ وَلَو شاءَ اللَّهُ لَذَهَبَ بِسَمعِهِم وَأَبصارِهِم ۚ إِنَّ اللَّهَ عَلىٰ كُلِّ شَيءٍ قَديرٌ",
  "يا أَيُّهَا النّاسُ اعبُدوا رَبَّكُمُ الَّذي خَلَقَكُم وَالَّذينَ مِن قَبلِكُم لَعَلَّكُم تَتَّقونَ",
  "الَّذي جَعَلَ لَكُمُ الأَرضَ فِراشًا وَالسَّماءَ بِناءً وَأَنزَلَ مِنَ السَّماءِ ماءً فَأَخرَجَ بِهِ مِنَ الثَّمَراتِ رِزقًا لَكُم ۖ فَلا تَجعَلوا لِلَّهِ أَندادًا وَأَنتُم تَعلَمونَ",
  "وَإِن كُنتُم في رَيبٍ مِمّا نَزَّلنا عَلىٰ عَبدِنا فَأتوا بِسورَةٍ مِن مِثلِهِ وَادعوا شُهَداءَكُم مِن دونِ اللَّهِ إِن كُنتُم صادِقينَ",
  "فَإِن لَم تَفعَلوا وَلَن تَفعَلوا فَاتَّقُوا النّارَ الَّتي وَقودُهَا النّاسُ وَالحِجارَةُ ۖ أُعِدَّت لِلكافِرينَ",
  "وَبَشِّرِ الَّذينَ آمَنوا وَعَمِلُوا الصّالِحاتِ أَنَّ لَهُم جَنّاتٍ تَجري مِن تَحتِهَا الأَنهارُ ۖ كُلَّما رُزِقوا مِنها مِن ثَمَرَةٍ رِزقًا ۙ قالوا هٰذَا الَّذي رُزِقنا مِن قَبلُ ۖ وَأُتوا بِهِ مُتَشابِهًا ۖ وَلَهُم فيها أَزواجٌ مُطَهَّرَةٌ ۖ وَهُم فيها خالِدونَ",
  "۞ إِنَّ اللَّهَ لا يَستَحيي أَن يَضرِبَ مَثَلًا ما بَعوضَةً فَما فَوقَها ۚ فَأَمَّا الَّذينَ آمَنوا فَيَعلَمونَ أَنَّهُ الحَقُّ مِن رَبِّهِم ۖ وَأَمَّا الَّذينَ كَفَروا فَيَقولونَ ماذا أَرادَ اللَّهُ بِهٰذا مَثَلًا ۘ يُضِلُّ بِهِ كَثيرًا وَيَهدي بِهِ كَثيرًا ۚ وَما يُضِلُّ بِهِ إِلَّا الفاسِقينَ",
  "الَّذينَ يَنقُضونَ عَهدَ اللَّهِ مِن بَعدِ ميثاقِهِ وَيَقطَعونَ ما أَمَرَ اللَّهُ بِهِ أَن يوصَلَ وَيُفسِدونَ فِي الأَرضِ ۚ أُولٰئِكَ هُمُ الخاسِرونَ",
  "كَيفَ تَكفُرونَ بِاللَّهِ وَكُنتُم أَمواتًا فَأَحياكُم ۖ ثُمَّ يُميتُكُم ثُمَّ يُحييكُم ثُمَّ إِلَيهِ تُرجَعونَ",
  "هُوَ الَّذي خَلَقَ لَكُم ما فِي الأَرضِ جَميعًا ثُمَّ استَوىٰ إِلَى السَّماءِ فَسَوّاهُنَّ سَبعَ سَماواتٍ ۚ وَهُوَ بِكُلِّ شَيءٍ عَليمٌ",
  "وَإِذ قالَ رَبُّكَ لِلمَلائِكَةِ إِنّي جاعِلٌ فِي الأَرضِ خَليفَةً ۖ قالوا أَتَجعَلُ فيها مَن يُفسِدُ فيها وَيَسفِكُ الدِّماءَ وَنَحنُ نُسَبِّحُ بِحَمدِكَ وَنُقَدِّسُ لَكَ ۖ قالَ إِنّي أَعلَمُ ما لا تَعلَمونَ",
  "وَعَلَّمَ آدَمَ الأَسماءَ كُلَّها ثُمَّ عَرَضَهُم عَلَى المَلائِكَةِ فَقالَ أَنبِئوني بِأَسماءِ هٰؤُلاءِ إِن كُنتُم صادِقينَ",
  "قالوا سُبحانَكَ لا عِلمَ لَنا إِلّا ما عَلَّمتَنا ۖ إِنَّكَ أَنتَ العَليمُ الحَكيمُ",
  "قالَ يا آدَمُ أَنبِئهُم بِأَسمائِهِم ۖ فَلَمّا أَنبَأَهُم بِأَسمائِهِم قالَ أَلَم أَقُل لَكُم إِنّي أَعلَمُ غَيبَ السَّماواتِ وَالأَرضِ وَأَعلَمُ ما تُبدونَ وَما كُنتُم تَكتُمونَ",
  "وَإِذ قُلنا لِلمَلائِكَةِ اسجُدوا لِآدَمَ فَسَجَدوا إِلّا إِبليسَ أَبىٰ وَاستَكبَرَ وَكانَ مِنَ الكافِرينَ",
  "وَقُلنا يا آدَمُ اسكُن أَنتَ وَزَوجُكَ الجَنَّةَ وَكُلا مِنها رَغَدًا حَيثُ شِئتُما وَلا تَقرَبا هٰذِهِ الشَّجَرَةَ فَتَكونا مِنَ الظّالِمينَ",
  "فَأَزَلَّهُمَا الشَّيطانُ عَنها فَأَخرَجَهُما مِمّا كانا فيهِ ۖ وَقُلنَا اهبِطوا بَعضُكُم لِبَعضٍ عَدُوٌّ ۖ وَلَكُم فِي الأَرضِ مُستَقَرٌّ وَمَتاعٌ إِلىٰ حينٍ",
  "فَتَلَقّىٰ آدَمُ مِن رَبِّهِ كَلِماتٍ فَتابَ عَلَيهِ ۚ إِنَّهُ هُوَ التَّوّابُ الرَّحيمُ",
  "قُلنَا اهبِطوا مِنها جَميعًا ۖ فَإِمّا يَأتِيَنَّكُم مِنّي هُدًى فَمَن تَبِعَ هُدايَ فَلا خَوفٌ عَلَيهِم وَلا هُم يَحزَنونَ",
  "وَالَّذينَ كَفَروا وَكَذَّبوا بِآياتِنا أُولٰئِكَ أَصحابُ النّارِ ۖ هُم فيها خالِدونَ",
  "يا بَني إِسرائيلَ اذكُروا نِعمَتِيَ الَّتي أَنعَمتُ عَلَيكُم وَأَوفوا بِعَهدي أوفِ بِعَهدِكُم وَإِيّايَ فَارهَبونِ",
  "وَآمِنوا بِما أَنزَلتُ مُصَدِّقًا لِما مَعَكُم وَلا تَكونوا أَوَّلَ كافِرٍ بِهِ ۖ وَلا تَشتَروا بِآياتي ثَمَنًا قَليلًا وَإِيّايَ فَاتَّقونِ",
  "وَلا تَلبِسُوا الحَقَّ بِالباطِلِ وَتَكتُمُوا الحَقَّ وَأَنتُم تَعلَمونَ",
  "وَأَقيمُوا الصَّلاةَ وَآتُوا الزَّكاةَ وَاركَعوا مَعَ الرّاكِعينَ",
  "۞ أَتَأمُرونَ النّاسَ بِالبِرِّ وَتَنسَونَ أَنفُسَكُم وَأَنتُم تَتلونَ الكِتابَ ۚ أَفَلا تَعقِلونَ",
  "وَاستَعينوا بِالصَّبرِ وَالصَّلاةِ ۚ وَإِنَّها لَكَبيرَةٌ إِلّا عَلَى الخاشِعينَ",
  "الَّذينَ يَظُنّونَ أَنَّهُم مُلاقو رَبِّهِم وَأَنَّهُم إِلَيهِ راجِعونَ",
  "يا بَني إِسرائيلَ اذكُروا نِعمَتِيَ الَّتي أَنعَمتُ عَلَيكُم وَأَنّي فَضَّلتُكُم عَلَى العالَمينَ",
  "وَاتَّقوا يَومًا لا تَجزي نَفسٌ عَن نَفسٍ شَيئًا وَلا يُقبَلُ مِنها شَفاعَةٌ وَلا يُؤخَذُ مِنها عَدلٌ وَلا هُم يُنصَرونَ",
  "وَإِذ نَجَّيناكُم مِن آلِ فِرعَونَ يَسومونَكُم سوءَ العَذابِ يُذَبِّحونَ أَبناءَكُم وَيَستَحيونَ نِساءَكُم ۚ وَفي ذٰلِكُم بَلاءٌ مِن رَبِّكُم عَظيمٌ",
  "وَإِذ فَرَقنا بِكُمُ البَحرَ فَأَنجَيناكُم وَأَغرَقنا آلَ فِرعَونَ وَأَنتُم تَنظُرونَ",
  "وَإِذ واعَدنا موسىٰ أَربَعينَ لَيلَةً ثُمَّ اتَّخَذتُمُ العِجلَ مِن بَعدِهِ وَأَنتُم ظالِمونَ",
  "ثُمَّ عَفَونا عَنكُم مِن بَعدِ ذٰلِكَ لَعَلَّكُم تَشكُرونَ",
  "وَإِذ آتَينا موسَى الكِتابَ وَالفُرقانَ لَعَلَّكُم تَهتَدونَ",
  "وَإِذ قالَ موسىٰ لِقَومِهِ يا قَومِ إِنَّكُم ظَلَمتُم أَنفُسَكُم بِاتِّخاذِكُمُ العِجلَ فَتوبوا إِلىٰ بارِئِكُم فَاقتُلوا أَنفُسَكُم ذٰلِكُم خَيرٌ لَكُم عِندَ بارِئِكُم فَتابَ عَلَيكُم ۚ إِنَّهُ هُوَ التَّوّابُ الرَّحيمُ",
  "وَإِذ قُلتُم يا موسىٰ لَن نُؤمِنَ لَكَ حَتّىٰ نَرَى اللَّهَ جَهرَةً فَأَخَذَتكُمُ الصّاعِقَةُ وَأَنتُم تَنظُرونَ",
  "ثُمَّ بَعَثناكُم مِن بَعدِ مَوتِكُم لَعَلَّكُم تَشكُرونَ",
  "وَظَلَّلنا عَلَيكُمُ الغَمامَ وَأَنزَلنا عَلَيكُمُ المَنَّ وَالسَّلوىٰ ۖ كُلوا مِن طَيِّباتِ ما رَزَقناكُم ۖ وَما ظَلَمونا وَلٰكِن كانوا أَنفُسَهُم يَظلِمونَ",
  "وَإِذ قُلنَا ادخُلوا هٰذِهِ القَريَةَ فَكُلوا مِنها حَيثُ شِئتُم رَغَدًا وَادخُلُوا البابَ سُجَّدًا وَقولوا حِطَّةٌ نَغفِر لَكُم خَطاياكُم ۚ وَسَنَزيدُ المُحسِنينَ",
  "فَبَدَّلَ الَّذينَ ظَلَموا قَولًا غَيرَ الَّذي قيلَ لَهُم فَأَنزَلنا عَلَى الَّذينَ ظَلَموا رِجزًا مِنَ السَّماءِ بِما كانوا يَفسُقونَ",
  "۞ وَإِذِ استَسقىٰ موسىٰ لِقَومِهِ فَقُلنَا اضرِب بِعَصاكَ الحَجَرَ ۖ فَانفَجَرَت مِنهُ اثنَتا عَشرَةَ عَينًا ۖ قَد عَلِمَ كُلُّ أُناسٍ مَشرَبَهُم ۖ كُلوا وَاشرَبوا مِن رِزقِ اللَّهِ وَلا تَعثَوا فِي الأَرضِ مُفسِدينَ",
  "وَإِذ قُلتُم يا موسىٰ لَن نَصبِرَ عَلىٰ طَعامٍ واحِدٍ فَادعُ لَنا رَبَّكَ يُخرِج لَنا مِمّا تُنبِتُ الأَرضُ مِن بَقلِها وَقِثّائِها وَفومِها وَعَدَسِها وَبَصَلِها ۖ قالَ أَتَستَبدِلونَ الَّذي هُوَ أَدنىٰ بِالَّذي هُوَ خَيرٌ ۚ اهبِطوا مِصرًا فَإِنَّ لَكُم ما سَأَلتُم ۗ وَضُرِبَت عَلَيهِمُ الذِّلَّةُ وَالمَسكَنَةُ وَباءوا بِغَضَبٍ مِنَ اللَّهِ ۗ ذٰلِكَ بِأَنَّهُم كانوا يَكفُرونَ بِآياتِ اللَّهِ وَيَقتُلونَ النَّبِيّينَ بِغَيرِ الحَقِّ ۗ ذٰلِكَ بِما عَصَوا وَكانوا يَعتَدونَ",
  "إِنَّ الَّذينَ آمَنوا وَالَّذينَ هادوا وَالنَّصارىٰ وَالصّابِئينَ مَن آمَنَ بِاللَّهِ وَاليَومِ الآخِرِ وَعَمِلَ صالِحًا فَلَهُم أَجرُهُم عِندَ رَبِّهِم وَلا خَوفٌ عَلَيهِم وَلا هُم يَحزَنونَ",
  "وَإِذ أَخَذنا ميثاقَكُم وَرَفَعنا فَوقَكُمُ الطّورَ خُذوا ما آتَيناكُم بِقُوَّةٍ وَاذكُروا ما فيهِ لَعَلَّكُم تَتَّقونَ",
  "ثُمَّ تَوَلَّيتُم مِن بَعدِ ذٰلِكَ ۖ فَلَولا فَضلُ اللَّهِ عَلَيكُم وَرَحمَتُهُ لَكُنتُم مِنَ الخاسِرينَ",
  "وَلَقَد عَلِمتُمُ الَّذينَ اعتَدَوا مِنكُم فِي السَّبتِ فَقُلنا لَهُم كونوا قِرَدَةً خاسِئينَ",
  "فَجَعَلناها نَكالًا لِما بَينَ يَدَيها وَما خَلفَها وَمَوعِظَةً لِلمُتَّقينَ",
  "وَإِذ قالَ موسىٰ لِقَومِهِ إِنَّ اللَّهَ يَأمُرُكُم أَن تَذبَحوا بَقَرَةً ۖ قالوا أَتَتَّخِذُنا هُزُوًا ۖ قالَ أَعوذُ بِاللَّهِ أَن أَكونَ مِنَ الجاهِلينَ",
  "قالُوا ادعُ لَنا رَبَّكَ يُبَيِّن لَنا ما هِيَ ۚ قالَ إِنَّهُ يَقولُ إِنَّها بَقَرَةٌ لا فارِضٌ وَلا بِكرٌ عَوانٌ بَينَ ذٰلِكَ ۖ فَافعَلوا ما تُؤمَرونَ",
  "قالُوا ادعُ لَنا رَبَّكَ يُبَيِّن لَنا ما لَونُها ۚ قالَ إِنَّهُ يَقولُ إِنَّها بَقَرَةٌ صَفراءُ فاقِعٌ لَونُها تَسُرُّ النّاظِرينَ",
  "قالُوا ادعُ لَنا رَبَّكَ يُبَيِّن لَنا ما هِيَ إِنَّ البَقَرَ تَشابَهَ عَلَينا وَإِنّا إِن شاءَ اللَّهُ لَمُهتَدونَ",
  "قالَ إِنَّهُ يَقولُ إِنَّها بَقَرَةٌ لا ذَلولٌ تُثيرُ الأَرضَ وَلا تَسقِي الحَرثَ مُسَلَّمَةٌ لا شِيَةَ فيها ۚ قالُوا الآنَ جِئتَ بِالحَقِّ ۚ فَذَبَحوها وَما كادوا يَفعَلونَ",
  "وَإِذ قَتَلتُم نَفسًا فَادّارَأتُم فيها ۖ وَاللَّهُ مُخرِجٌ ما كُنتُم تَكتُمونَ",
  "فَقُلنَا اضرِبوهُ بِبَعضِها ۚ كَذٰلِكَ يُحيِي اللَّهُ المَوتىٰ وَيُريكُم آياتِهِ لَعَلَّكُم تَعقِلونَ",
  "ثُمَّ قَسَت قُلوبُكُم مِن بَعدِ ذٰلِكَ فَهِيَ كَالحِجارَةِ أَو أَشَدُّ قَسوَةً ۚ وَإِنَّ مِنَ الحِجارَةِ لَما يَتَفَجَّرُ مِنهُ الأَنهارُ ۚ وَإِنَّ مِنها لَما يَشَّقَّقُ فَيَخرُجُ مِنهُ الماءُ ۚ وَإِنَّ مِنها لَما يَهبِطُ مِن خَشيَةِ اللَّهِ ۗ وَمَا اللَّهُ بِغافِلٍ عَمّا تَعمَلونَ",
  "۞ أَفَتَطمَعونَ أَن يُؤمِنوا لَكُم وَقَد كانَ فَريقٌ مِنهُم يَسمَعونَ كَلامَ اللَّهِ ثُمَّ يُحَرِّفونَهُ مِن بَعدِ ما عَقَلوهُ وَهُم يَعلَمونَ",
  "وَإِذا لَقُوا الَّذينَ آمَنوا قالوا آمَنّا وَإِذا خَلا بَعضُهُم إِلىٰ بَعضٍ قالوا أَتُحَدِّثونَهُم بِما فَتَحَ اللَّهُ عَلَيكُم لِيُحاجّوكُم بِهِ عِندَ رَبِّكُم ۚ أَفَلا تَعقِلونَ",
  "أَوَلا يَعلَمونَ أَنَّ اللَّهَ يَعلَمُ ما يُسِرّونَ وَما يُعلِنونَ",
  "وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنفَعُ الْمُؤْمِنِينَ",
  "فَإِنْ تَوَلَّوْا فَإِنَّمَا عَلَيْكَ الْبَلَاغُ الْمُبِينُ",
  "وَنَبِّئْهُمْ أَنَّ الْمَاءَ قِسْمَةٌ بَيْنَهُمْ ۖ كُلُّ شِرْبٍ مُحْتَضَرٌ",
  "إِنْ هُوَ إِلَّا ذِكْرٌ لِلْعَالَمِينَ", 
  "وَصَدَّهَا مَا كَانَتْ تَعْبُدُ مِنْ دُونِ اللَّهِ ۖ إِنَّهَا كَانَتْ مِنْ قَوْمٍ كَافِرِينَ",
  "وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ",
  "ذَٰلِكَ بِمَا قَدَّمَتْ يَدَاكَ وَأَنَّ اللَّهَ لَيْسَ بِظَلَّامٍ لِلْعَبِيدِ",
  "أَإِذَا مِتْنَا وَكُنَّا تُرَابًا ۖ ذَٰلِكَ رَجْعٌ بَعِيدٌ",
  "وَآتَيْنَاهُ فِي الدُّنْيَا حَسَنَةً ۖ وَإِنَّهُ فِي الْآخِرَةِ لَمِنَ الصَّالِحِينَ",
  "وَإِنْ يُكَذِّبُوكَ فَقَدْ كَذَّبَتْ قَبْلَهُمْ قَوْمُ نُوحٍ وَعَادٌ وَثَمُودُ",
  "فَضْلًا مِنْ رَبِّكَ ۚ ذَٰلِكَ هُوَ الْفَوْزُ الْعَظِيمُ",
  "فَارْتَقِبْ يَوْمَ تَأْتِي السَّمَاءُ بِدُخَانٍ مُبِينٍ",
  "أَلَمْ تَكُنْ آيَاتِي تُتْلَىٰ عَلَيْكُمْ فَكُنْتُمْ بِهَا تُكَذِّبُونَ",
  "قَالُوا أَضْغَاثُ أَحْلَامٍ ۖ وَمَا نَحْنُ بِتَأْوِيلِ الْأَحْلَامِ بِعَالِمِينَ",
  "سُبْحَانَهُ وَتَعَالَىٰ عَمَّا يَقُولُونَ عُلُوًّا كَبِيرًا",
  "قَالَ بَلْ فَعَلَهُ كَبِيرُهُمْ هَٰذَا فَاسْأَلُوهُمْ إِنْ كَانُوا يَنْطِقُونَ",
  "بَشِيرًا وَنَذِيرًا فَأَعْرَضَ أَكْثَرُهُمْ فَهُمْ لَا يَسْمَعُونَ",
  "وَلَا تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ وَتَكْتُمُوا الْحَقَّ وَأَنْتُمْ تَعْلَمُونَ",
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

alert(randomItem);