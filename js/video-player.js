document.addEventListener('DOMContentLoaded', () => {
    // 处理所有视频元素
    const videos = document.querySelectorAll('.activity-video video');
    
    videos.forEach(video => {
        // 添加加载状态
        const container = video.parentElement;
        container.classList.add('loading');
        
        // 视频可以播放时
        video.addEventListener('canplay', () => {
            container.classList.remove('loading');
        });
        
        // 视频加载失败时
        video.addEventListener('error', () => {
            container.innerHTML = `
                <div class="video-error">
                    <p>视频加载失败</p>
                    <button onclick="this.parentElement.parentElement.querySelector('video').load()">
                        重试
                    </button>
                </div>
            `;
        });
        
        // 暂停其他视频
        video.addEventListener('play', () => {
            videos.forEach(otherVideo => {
                if (otherVideo !== video && !otherVideo.paused) {
                    otherVideo.pause();
                }
            });
        });
    });
}); 