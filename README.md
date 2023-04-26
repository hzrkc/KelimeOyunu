# KelimeOyunu
 
# I.	ÖZET
Bu projede, Oyun, 8x10'luk bir alanda oynanacak. Oyuncular, harflerin düştüğü alanda anlamlı kelimeler oluşturacaklar. Kelime havuzu, en az 50.000 kelime içermeli ve Türk Dil Kurumundaki kelimeler kullanılmalıdır. Oyun, başlangıçta belirli bir harf havuzuyla başlayacak ve belirli bir süre sonra rastgele harfler düşecek. Harfler, sesli ve sessiz harfler karışık olacak ve belirli bir oranda sesli ve sessiz harflerle başlanacak. Oyuncular, oluşturdukları kelimenin anlamlı olduğunu doğrulamak için onay düğmesine veya ekranı sağa doğru kaydırarak kontrol etmelidirler. Eğer kelime anlamsızsa, silmek için bir silme düğmesi olmalıdır. Seçilen harfler istenmiyorsa, iptal etmek için üstlerine tıklanabilir. Projenin geliştirilmesinde React-Native kullanılmıştır.
# II.	İÇERIK

A. Proje Tanımı  
B. Kullanılan Yöntemlerin Açıklamaları  
C. Proje Algoritması  
D. Proje Sonuçları  
E. Yalancı Kod  
F. Kaynakça  

# III.	GİRİŞ

Projede oyunu oynayan kullanıcılar, seçerek veya klavye ile giriş yaparak yukarıdaki 8x10’luk boardda rasgele bir şekilde dağıtılmış harfleri seçer ve onay butonuna bastığında veri tabanında bulunan 76.000~kelime arasından, kullanıcının girdiği kelimenin bulunup bulunmadığı tespit edilir. 
Kelime bulunursa: girilen kelime, harfleri ayrılır ve letterScore dizisinde tanımlanan harflerin puan karşılığı kadar puan kullanıcının hanesine yazılır. 
	Kelime bulunmazsa: hataliKelimeSayisi değişkeni 1 artırılır. Artan bu değişken “3” değerine ulaştığında, oyun biter ve ekrana oyuncunun skoru gelir.
.

# IV.	KULLANILAN YÖNTEMLER
Projeyi geliştirirken kullandığımız yöntemler ve açıklamaları:

## A.	App
Kullanıcının rastgele harflerle dolu bir oyun tahtasında kelime oluşturmasını sağlar. Kullanıcılar, tahtadaki harfleri kullanarak bir kelime oluşturduklarında, kelimenin doğru olup olmadığı kontrol edilir ve eğer doğruysa, puanlarını artırır. Eğer kullanıcı yanlış bir kelime yazarsa, hatalı kelime sayısı artar. Üç hatalı kelime yazarsa, oyun biter. Uygulama, GameBoard, WordInput, Score ve GameOverMessage bileşenlerinden oluşur. GameBoard bileşeni, oyun tahtasını görüntüler. WordInput bileşeni, kullanıcının kelime girişi yapmasına olanak tanır. Score bileşeni, kullanıcının puanını görüntüler. GameOverMessage bileşeni, oyunun bittiğini belirten bir mesaj ve kullanıcının aldığı toplam puanı görüntüler.

## B.	GameBoard
Oyundaki harf tahtasını oluşturan GameBoard bileşenini içerir. Bu bileşen, bir prop olarak aldığı board dizisini kullanarak harf tahtasını oluşturur. Tahta, her satırı ve her hücresi GameCell bileşenleriyle oluşturulur ve GameCell bileşeni, tek bir hücreyi gösterir. Oluşturulan satır ve hücreler, flexbox yöntemiyle stilendirilir.


## C.	GameCell
Bir oyun hücresini temsil etmektedir. Bileşen, "TouchableOpacity", "Animated.View" ve "Text" bileşenlerini kullanarak bir oyun hücresini oluşturur.
Bileşen bir renk state'i içerir ve bu renk state'i, "getRandomColor" fonksiyonundan rastgele bir renk seçerek atanır. Bileşen ayrıca bir dizi animasyonlu efekt de içerir.
Kullanıcı dokunduğunda, "handlePress" fonksiyonu çalışır ve animasyonlu bir dizi tetikler. Bu dizide, hücrenin dönme hareketi, "Animated.timing" fonksiyonu kullanılarak belirtilir. Son olarak, "interpolateRotation" adlı bir fonksiyon, "Animated.Value" değerinin çıktı aralığını ayarlamak için kullanılır.


## D.	WordInput
Dosyada, kelime girişi için bir text input kutusu, kelimeyi onaylamak veya silmek için iki düğme (bir "X" düğmesi kelimeyi silerken, bir "O" düğmesi kelimeyi onaylar), bir kelimenin doğruluğunu kontrol etmek ve skoru hesaplamak için gerekli fonksiyonlar, ve bu bileşenin stilini tanımlayan bir stil nesnesi yer alıyor.
Kodun içindeki kelime doğruluğu kontrol fonksiyonu, kelimenin kelime listesi adlı başka bir dosyada bulunan bir kelimeyle eşleşip eşleşmediğini kontrol eder. Eşleşen kelime varsa, kelimenin skoru, harflere göre puanlama yaparak hesaplanır. Kelime doğruysa, skor uygulamanın genel skoruna eklenir ve kelimenin girdisi silinir. Eşleşen kelime yoksa, kelime doğru olmadığı için yanlış kelime sayısı artırılır ve yanlış kelime sayısı bileşene aktarılır.


## E.	Score
"score" adında bir prop alır. "score" prop'unu alır ve bunu bir "Text" bileşenine aktarır. "Text" bileşeni, "Skor:" metnini ve "score" prop'unun değerini gösterir. Bileşen, bir stil nesnesi kullanarak "score" ve "scoreNumber" stillerini tanımlar.

## F.	KelimeListesi
Skor hesaplamasının yapılmasını ve kelimenin doğruluğunun kontrol edilebilmesi için gerekli olan Türkçe kelime listesini tutar.
