; ============================================================
;  اختصارات «حياتي» — تشتغل من أي برنامج على الويندوز
;  محتاج AutoHotkey v2 (ببلاش): https://www.autohotkey.com
; ============================================================
#Requires AutoHotkey v2.0
#SingleInstance Force

HAYATI := "https://hoss7.github.io/hayati/"

OpenApp(path, w := 0, h := 0) {
    global HAYATI
    size := (w && h) ? " --window-size=" w "," h : ""
    try Run('chrome.exe --app="' HAYATI path '"' size)
    catch
        try Run('msedge.exe --app="' HAYATI path '"' size)
        catch
            Run(HAYATI path)
}

; Ctrl+Q  ← كتابة سريعة (ملاحظة / مهمة / تذكير) في شباك صغير
^q:: OpenApp("?mini=1#quick", 600, 680)

; Ctrl+Alt+H  ← افتح «حياتي» كامل
^!h:: OpenApp("#today")

; Ctrl+Alt+F  ← وضع التركيز
^!f:: OpenApp("#focus")

; Ctrl+Alt+P  ← خطة اليوم (السكرتير)
^!p:: OpenApp("#sec")
