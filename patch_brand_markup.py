from pathlib import Path
p=Path(r'D:\AGAM_SITE\build_exact.py')
s=p.read_text(encoding='utf-8')
s=s.replace('<a class="brand" href="index.html"><img src="assets/agam-logo.png" alt="AGAM — פתרונות חכמים לבית ולעסק"></a>','<a class="brand" href="index.html"><img src="assets/agam-logo.png" alt="AGAM"><small class="brand-tagline">פתרונות חכמים לבית ולעסק</small></a>')
s=s.replace('<div class="mega brand-mega"><img src="assets/agam-logo.png" alt="AGAM"></div>','<div class="mega brand-mega"><img src="assets/agam-logo.png" alt="AGAM"><small class="brand-tagline hero-tagline">פתרונות חכמים לבית ולעסק</small></div>')
p.write_text(s,encoding='utf-8')
print('patched brand markup')