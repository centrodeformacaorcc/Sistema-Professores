// Bloqueia o clique direito
        document.addEventListener('contextmenu', event => event.preventDefault());

        // Bloqueia atalhos de teclado do DevTools e exibição de código-fonte
        document.addEventListener('keydown', function(e) {
            if(
                e.keyCode === 123 || // F12
                (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
                (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
                (e.ctrlKey && e.shiftKey && e.keyCode === 67) || // Ctrl+Shift+C
                (e.ctrlKey && e.keyCode === 85) // Ctrl+U (Ver código-fonte)
            ) {
                e.preventDefault();
                return false;
            }
        });

        // Anti-Debugger: Trava a execução na aba Sources se o DevTools for aberto
        setInterval(function() {
            (function() {
                return false;
            }['constructor']('debugger')());
        }, 100);