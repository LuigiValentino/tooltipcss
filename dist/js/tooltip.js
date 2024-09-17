(function () {
    const Tooltip = {
        init: function () {
            document.addEventListener('mouseover', this.showTooltip);
            document.addEventListener('mouseout', this.hideTooltip);
        },
        showTooltip: function (event) {
            const target = event.target.closest('[data-tooltip]');
            if (!target) return;

            const tooltipText = target.getAttribute('data-tooltip');
            if (!tooltipText) return;

            const tooltip = document.createElement('div');
            tooltip.className = 'custom-tooltip';
            tooltip.innerText = tooltipText;

            const tooltipColor = target.getAttribute('data-tooltip-color') || '#333';
            const tooltipSize = target.getAttribute('data-tooltip-size') || '12px';
            tooltip.style.backgroundColor = tooltipColor;
            tooltip.style.fontSize = tooltipSize;


            document.body.appendChild(tooltip);

            const rect = target.getBoundingClientRect();
            tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';

            target._tooltip = tooltip;

            const animateType = target.getAttribute('data-tooltip-animate');
            if (animateType === 'fade') {
                tooltip.style.opacity = '0';
                tooltip.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    tooltip.style.opacity = '1';
                    tooltip.style.transform = 'translateY(0)';
                }, 10); 
            } else {
                tooltip.style.opacity = '1';
            }

            const infiniteAnimation = target.getAttribute('data-tooltip-infinite');
            if (infiniteAnimation === 'true') {
                tooltip.classList.add('infinite-animation');
            }

            const staticTooltip = target.getAttribute('data-tooltip-static');
            if (staticTooltip === 'true') {
                target.removeEventListener('mouseout', Tooltip.hideTooltip);
            }

            const delay = target.getAttribute('data-tooltip-delay');
            if (delay) {
                tooltip.style.transitionDelay = delay + 'ms';
            }
        },
        hideTooltip: function (event) {
            const target = event.target.closest('[data-tooltip]');
            if (!target) return;

            const tooltip = target._tooltip;
            if (tooltip) {
                tooltip.style.opacity = '0';
                tooltip.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    tooltip.remove();
                    target._tooltip = null;
                }, 300);
            }
        }
    };

    document.addEventListener('DOMContentLoaded', function () {
        Tooltip.init();
    });
})();
