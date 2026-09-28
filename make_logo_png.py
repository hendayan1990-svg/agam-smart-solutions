from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
root=Path(r'D:\AGAM_SITE\assets')
blue=(18,124,255,255); navy=(6,22,56,255)
W,H=1000,220
im=Image.new('RGBA',(W,H),(0,0,0,0)); d=ImageDraw.Draw(im)
x0,y0=12,7; mw,mh=205,205
outer=[(x0+mw//2,y0),(x0+mw,y0+mh),(x0+mw*3//4,y0+mh),(x0+mw//2,y0+mh//2),(x0+mw//4,y0+mh),(x0,y0+mh)]
d.polygon(outer,fill=blue)
inner=[(x0+mw//2,y0+65),(x0+mw//2+36,y0+130),(x0+mw//2+7,y0+130),(x0+mw//2-30,y0+183),(x0+mw//2-64,y0+183)]
d.polygon(inner,fill=(255,255,255,255))
font=ImageFont.truetype(r'C:\Windows\Fonts\arialbd.ttf',128)
d.text((245,38),'AGAM',font=font,fill=navy)
im.save(root/'agam-logo.png')
print(root/'agam-logo.png')